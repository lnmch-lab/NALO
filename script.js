const STORAGE_KEY = "nalo-cards";

const views = {
  collection: document.getElementById("view-collection"),
  photo: document.getElementById("view-photo"),
  word: document.getElementById("view-word"),
  card: document.getElementById("view-card"),
  view: document.getElementById("view-view"),
};

function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
}

// --- Stockage ---

function getCards() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCards(cards) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
}

// --- Image : redimensionnement + extraction de palette ---
// (algorithme repris de la maquette v3, validée par LN)

function resizeImage(file, maxSize = 760, quality = 0.85) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function hex(r, g, b) {
  return "#" + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("");
}

function extractPalette(dataUrl) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const s = 64;
      const canvas = document.createElement("canvas");
      canvas.width = s;
      canvas.height = s;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, s, s);
      const d = ctx.getImageData(0, 0, s, s).data;
      const bins = {};
      for (let i = 0; i < d.length; i += 4) {
        const k = (d[i] >> 4) + "-" + (d[i + 1] >> 4) + "-" + (d[i + 2] >> 4);
        const b = bins[k] || (bins[k] = { r: 0, g: 0, b: 0, n: 0 });
        b.r += d[i]; b.g += d[i + 1]; b.b += d[i + 2]; b.n++;
      }
      let arr = Object.values(bins).map((b) => ({ r: b.r / b.n, g: b.g / b.n, b: b.b / b.n, n: b.n }));
      const sat = (c) => { const mx = Math.max(c.r, c.g, c.b), mn = Math.min(c.r, c.g, c.b); return mx ? (mx - mn) / mx : 0; };
      arr.forEach((c) => (c.score = c.n * (0.35 + sat(c))));
      arr.sort((a, b) => b.score - a.score);
      const picked = [];
      for (let j = 0; j < arr.length && picked.length < 5; j++) {
        const c = arr[j];
        if (picked.every((p) => Math.hypot(p.r - c.r, p.g - c.g, p.b - c.b) > 55)) picked.push(c);
      }
      while (picked.length < 5) picked.push(picked[picked.length - 1] || { r: 200, g: 180, b: 160 });
      resolve(picked.map((c) => hex(c.r, c.g, c.b)));
    };
    img.src = dataUrl;
  });
}

// --- Audio ---

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  try {
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "vi-VN";
    utter.rate = 0.85;
    const viVoice = speechSynthesis.getVoices().find((v) => v.lang && v.lang.startsWith("vi"));
    if (viVoice) utter.voice = viVoice;
    speechSynthesis.cancel();
    speechSynthesis.speak(utter);
  } catch {
    // best effort : pas de voix vietnamienne disponible sur cet appareil
  }
}

// --- Carte : rendu + interactions (flip, holo au survol) ---

function populateCard(ids, data) {
  document.getElementById(ids.name).textContent = data.word.fr;

  const starsEl = document.getElementById(ids.stars);
  starsEl.innerHTML = "";
  const rarity = wordRarity(data.word);
  for (let i = 0; i < 3; i++) {
    const s = document.createElement("i");
    s.className = "star" + (i < rarity ? "" : " off");
    starsEl.appendChild(s);
  }

  document.getElementById(ids.artPhoto).src = data.photoDataUrl;
  document.getElementById(ids.vn).textContent = data.word.vn;
  document.getElementById(ids.kind).textContent = `Nom · ${data.word.type}`;
  document.getElementById(ids.num).textContent = String(data.num).padStart(3, "0");
  document.getElementById(ids.photoImg).src = data.photoDataUrl;
  document.getElementById(ids.date).textContent = data.date;
  document.getElementById(ids.time).textContent = data.time;
  document.getElementById(ids.note).value = data.note || "";

  const cardEl = document.getElementById(ids.card);
  data.palette.forEach((c, i) => cardEl.style.setProperty(`--p${i + 1}`, c));
  cardEl.classList.remove("flipped");
}

function setupCardInteractions(ids, getVn) {
  const cardEl = document.getElementById(ids.card);
  const holoEl = document.getElementById(ids.holo);
  const speakBtn = document.getElementById(ids.speakBtn);

  function flip() {
    cardEl.classList.toggle("flipped");
    cardEl.style.transform = "";
  }

  cardEl.addEventListener("click", (e) => {
    if (e.target.closest("textarea, .speak")) return;
    flip();
  });

  cardEl.addEventListener("mousemove", (e) => {
    if (cardEl.classList.contains("flipped")) return;
    const r = cardEl.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    cardEl.style.transform = `rotateY(${(x - 0.5) * 16}deg) rotateX(${(0.5 - y) * 12}deg)`;
    holoEl.style.setProperty("--hx", x * 100 + "%");
    holoEl.style.setProperty("--hy", y * 100 + "%");
  });

  cardEl.addEventListener("mouseleave", () => {
    if (!cardEl.classList.contains("flipped")) cardEl.style.transform = "";
  });

  speakBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    speak(getVn());
  });
}

const createIds = {
  card: "card", holo: "holo", speakBtn: "btn-speak",
  name: "c-name", stars: "c-stars", artPhoto: "art-photo", vn: "c-vn",
  kind: "c-kind", num: "c-num", photoImg: "photo-img",
  date: "m-date", time: "m-time", note: "card-note",
};

const viewIds = {
  card: "view-card-el", holo: "v-holo", speakBtn: "btn-view-speak",
  name: "v-name", stars: "v-stars", artPhoto: "v-art-photo", vn: "v-vn",
  kind: "v-kind", num: "v-num", photoImg: "v-photo-img",
  date: "v-date", time: "v-time", note: "v-note",
};

let currentWordForCreate = null;
let currentCreateData = null;
let currentViewCardId = null;

// --- Étape 1 : photo ---

let pendingPhotoDataUrl = null;

document.getElementById("photo-drop").addEventListener("click", () => {
  document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  e.target.value = "";
  if (!file) return;
  pendingPhotoDataUrl = await resizeImage(file);
  const preview = document.getElementById("photo-preview");
  preview.src = pendingPhotoDataUrl;
  preview.classList.remove("hidden");
  document.getElementById("photo-drop-hint").classList.add("hidden");
  document.getElementById("btn-photo-next").disabled = false;
});

document.getElementById("btn-photo-next").addEventListener("click", () => {
  if (!pendingPhotoDataUrl) return;
  activeThemeFilter = "all";
  document.getElementById("word-search").value = "";
  renderWordList();
  showView("word");
});

document.getElementById("btn-photo-cancel").addEventListener("click", () => {
  pendingPhotoDataUrl = null;
  document.getElementById("photo-preview").classList.add("hidden");
  document.getElementById("photo-drop-hint").classList.remove("hidden");
  document.getElementById("btn-photo-next").disabled = true;
  renderCollection();
  showView("collection");
});

// --- Étape 2 : choix du mot ---

let activeThemeFilter = "all";

function renderThemeFilters() {
  const wrap = document.getElementById("theme-filters");
  wrap.innerHTML = "";
  const allBtn = document.createElement("button");
  allBtn.className = "theme-chip" + (activeThemeFilter === "all" ? " active" : "");
  allBtn.textContent = "Tous";
  allBtn.addEventListener("click", () => { activeThemeFilter = "all"; renderWordList(); });
  wrap.appendChild(allBtn);

  THEMES.forEach((theme) => {
    const btn = document.createElement("button");
    btn.className = "theme-chip" + (activeThemeFilter === theme ? " active" : "");
    btn.textContent = theme;
    btn.addEventListener("click", () => { activeThemeFilter = theme; renderWordList(); });
    wrap.appendChild(btn);
  });
}

function renderWordList() {
  renderThemeFilters();
  const query = document.getElementById("word-search").value.trim().toLowerCase();
  const list = document.getElementById("word-list");
  list.innerHTML = "";

  WORDS
    .filter((w) => activeThemeFilter === "all" || w.type === activeThemeFilter)
    .filter((w) => !query || w.fr.toLowerCase().includes(query) || w.vn.toLowerCase().includes(query))
    .forEach((word) => {
      const item = document.createElement("button");
      item.className = "word-item";
      item.innerHTML = `<span class="word-item-fr">${word.fr}</span><span class="word-item-vn">${word.vn}</span>`;
      item.addEventListener("click", () => selectWord(word));
      list.appendChild(item);
    });
}

document.getElementById("word-search").addEventListener("input", renderWordList);

document.getElementById("btn-word-back").addEventListener("click", () => {
  showView("photo");
});

async function selectWord(word) {
  currentWordForCreate = word;
  const palette = await extractPalette(pendingPhotoDataUrl);
  const now = new Date();
  const cards = getCards();

  currentCreateData = {
    word,
    photoDataUrl: pendingPhotoDataUrl,
    palette,
    num: cards.length + 1,
    date: now.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric", month: "short", year: "numeric" }),
    time: now.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }).replace(":", "h"),
    note: "",
  };

  populateCard(createIds, currentCreateData);
  showView("card");
}

setupCardInteractions(createIds, () => currentWordForCreate && currentWordForCreate.vn);

// --- Étape 3 : carte générée ---

document.getElementById("btn-card-retry").addEventListener("click", () => {
  pendingPhotoDataUrl = null;
  document.getElementById("photo-preview").classList.add("hidden");
  document.getElementById("photo-drop-hint").classList.remove("hidden");
  document.getElementById("btn-photo-next").disabled = true;
  showView("photo");
});

document.getElementById("btn-card-save").addEventListener("click", () => {
  if (!currentCreateData) return;
  const cards = getCards();
  const note = document.getElementById("card-note").value;
  cards.push({
    id: Date.now().toString(36),
    wordId: currentCreateData.word.id,
    photoDataUrl: currentCreateData.photoDataUrl,
    palette: currentCreateData.palette,
    num: currentCreateData.num,
    date: currentCreateData.date,
    time: currentCreateData.time,
    note,
  });
  saveCards(cards);

  currentCreateData = null;
  pendingPhotoDataUrl = null;
  document.getElementById("photo-preview").classList.add("hidden");
  document.getElementById("photo-drop-hint").classList.remove("hidden");
  document.getElementById("btn-photo-next").disabled = true;

  renderCollection();
  showView("collection");
});

// --- Collection ---

function renderCollection() {
  const cards = getCards();
  document.getElementById("collection-count").textContent = `${cards.length} carte${cards.length > 1 ? "s" : ""}`;
  document.getElementById("collection-empty").classList.toggle("hidden", cards.length > 0);

  const grid = document.getElementById("collection-grid");
  grid.innerHTML = "";
  cards.slice().reverse().forEach((card) => {
    const word = WORDS.find((w) => w.id === card.wordId);
    if (!word) return;
    const mini = document.createElement("button");
    mini.className = "mini-card";
    card.palette.forEach((c, i) => mini.style.setProperty(`--p${i + 1}`, c));
    mini.innerHTML = `
      <div class="mini-card-in">
        <img class="mini-card-photo" src="${card.photoDataUrl}" alt="${word.fr}">
        <span class="mini-card-vn">${word.vn}</span>
      </div>
    `;
    mini.addEventListener("click", () => openCardView(card, word));
    grid.appendChild(mini);
  });
}

function openCardView(card, word) {
  currentViewCardId = card.id;
  populateCard(viewIds, {
    word,
    photoDataUrl: card.photoDataUrl,
    palette: card.palette,
    num: card.num,
    date: card.date,
    time: card.time,
    note: card.note,
  });
  showView("view");
}

setupCardInteractions(viewIds, () => {
  const card = getCards().find((c) => c.id === currentViewCardId);
  const word = card && WORDS.find((w) => w.id === card.wordId);
  return word && word.vn;
});

document.getElementById("v-note").addEventListener("input", (e) => {
  const cards = getCards();
  const card = cards.find((c) => c.id === currentViewCardId);
  if (!card) return;
  card.note = e.target.value;
  saveCards(cards);
});

document.getElementById("btn-view-back").addEventListener("click", () => {
  renderCollection();
  showView("collection");
});

// --- Navigation globale ---

document.getElementById("nav-collection").addEventListener("click", () => {
  renderCollection();
  showView("collection");
});

document.getElementById("nav-new-card").addEventListener("click", () => {
  pendingPhotoDataUrl = null;
  document.getElementById("photo-preview").classList.add("hidden");
  document.getElementById("photo-drop-hint").classList.remove("hidden");
  document.getElementById("btn-photo-next").disabled = true;
  showView("photo");
});

// --- Démarrage ---

renderCollection();
showView("collection");
