// URL du Worker Cloudflare (backend). À remplacer après déploiement :
// wrangler deploy dans le dossier worker/, puis copier l'URL affichée.
const WORKER_URL = "https://nalo-worker.YOUR-SUBDOMAIN.workers.dev";

const STORAGE_KEY = "nalo-collection";

const STAGES = [
  { min: 0, emoji: "🐟", name: "Carpeau" },
  { min: 3, emoji: "🐠", name: "Carpeau curieux" },
  { min: 7, emoji: "🐡", name: "Carpeau espiègle" },
  { min: 12, emoji: "🐉", name: "Dragon en devenir" },
  { min: 20, emoji: "🐲", name: "Dragon Nalo" },
];

const views = {
  home: document.getElementById("view-home"),
  loading: document.getElementById("view-loading"),
  card: document.getElementById("view-card"),
  gallery: document.getElementById("view-gallery"),
};

let pendingPhoto = null; // { dataUrl, base64, mediaType }
let pendingCard = null; // résultat identifié, pas encore sauvegardé

function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
}

function getCollection() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCollection(collection) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
}

function currentStage(count) {
  let stage = STAGES[0];
  for (const s of STAGES) {
    if (count >= s.min) stage = s;
  }
  return stage;
}

function renderHome() {
  const collection = getCollection();
  const stage = currentStage(collection.length);
  document.getElementById("mascot").textContent = stage.emoji;
  document.getElementById("stage-name").textContent = stage.name;
  document.getElementById("progress").textContent =
    collection.length === 0
      ? "Aucun objet découvert pour l'instant"
      : `${collection.length} objet${collection.length > 1 ? "s" : ""} découvert${collection.length > 1 ? "s" : ""}`;
}

function renderGallery() {
  const collection = getCollection();
  document.getElementById("gallery-progress").textContent = `${collection.length} objet${collection.length > 1 ? "s" : ""} collecté${collection.length > 1 ? "s" : ""}`;
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";
  collection
    .slice()
    .reverse()
    .forEach((card) => {
      const item = document.createElement("div");
      item.className = "gallery-item";
      item.innerHTML = `
        <img src="${card.photo}" alt="${card.objet_vn}">
        <div class="gallery-label">${card.objet_vn}</div>
      `;
      grid.appendChild(item);
    });
}

// Downscale l'image pour limiter poids réseau et stockage local.
function resizeImage(file, maxSize = 640, quality = 0.75) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.onload = () => {
        const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
        const canvas = document.createElement("canvas");
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL("image/jpeg", quality);
        resolve({
          dataUrl,
          base64: dataUrl.split(",")[1],
          mediaType: "image/jpeg",
        });
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function identifyObject(photo) {
  const res = await fetch(WORKER_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ image: photo.base64, mediaType: photo.mediaType }),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || "Erreur d'identification");
  }
  return data;
}

function showCard(card, photoDataUrl, error) {
  const errorEl = document.getElementById("card-error");
  const cardEl = document.getElementById("result-card");

  if (error) {
    cardEl.classList.add("hidden");
    errorEl.textContent = error;
    errorEl.classList.remove("hidden");
    document.getElementById("btn-add").classList.add("hidden");
    showView("card");
    return;
  }

  cardEl.classList.remove("hidden");
  errorEl.classList.add("hidden");
  document.getElementById("btn-add").classList.remove("hidden");

  document.getElementById("card-photo").src = photoDataUrl;
  const catEl = document.getElementById("card-category");
  catEl.textContent = card.categorie;
  catEl.dataset.cat = card.categorie;
  document.getElementById("card-vn").textContent = card.objet_vn;
  document.getElementById("card-pronunciation").textContent = card.prononciation;
  document.getElementById("card-fr").textContent = card.objet_fr;

  showView("card");
}

async function handlePhotoSelected(file) {
  if (!file) return;

  const photo = await resizeImage(file);
  pendingPhoto = photo;

  document.getElementById("loading-preview").src = photo.dataUrl;
  showView("loading");

  try {
    const card = await identifyObject(photo);
    pendingCard = card;
    showCard(card, photo.dataUrl);
  } catch (err) {
    pendingCard = null;
    showCard(null, photo.dataUrl, err.message || "Impossible d'identifier l'objet. Réessaie.");
  }
}

// --- Navigation et événements ---

document.getElementById("btn-capture").addEventListener("click", () => {
  document.getElementById("file-input").click();
});

document.getElementById("file-input").addEventListener("change", (e) => {
  handlePhotoSelected(e.target.files[0]);
  e.target.value = "";
});

document.getElementById("btn-gallery").addEventListener("click", () => {
  renderGallery();
  showView("gallery");
});

document.getElementById("btn-gallery-back").addEventListener("click", () => {
  renderHome();
  showView("home");
});

document.getElementById("btn-home").addEventListener("click", () => {
  renderHome();
  showView("home");
});

document.getElementById("btn-retry").addEventListener("click", () => {
  document.getElementById("file-input").click();
});

document.getElementById("btn-add").addEventListener("click", () => {
  if (!pendingCard || !pendingPhoto) return;
  const collection = getCollection();
  collection.push({
    ...pendingCard,
    photo: pendingPhoto.dataUrl,
    date: new Date().toISOString(),
  });
  saveCollection(collection);
  pendingCard = null;
  pendingPhoto = null;
  renderHome();
  showView("home");
});

renderHome();
showView("home");
