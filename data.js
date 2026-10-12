// Mots disponibles pour l'instant (sélection manuelle en attendant la reconnaissance IA).
// type = thème affiché sur la carte ("Nom · <thème>").

const WORDS = [
  { id: "poisson", fr: "Le poisson", vn: "cá", pronunciation: "ka", type: "Mer" },
  { id: "crabe", fr: "Le crabe", vn: "cua", pronunciation: "coua", type: "Mer" },
  { id: "coquillage", fr: "Le coquillage", vn: "sò", pronunciation: "so", type: "Mer" },
  { id: "etoile", fr: "L'étoile de mer", vn: "sao biển", pronunciation: "sao bien", type: "Mer" },
  { id: "bateau", fr: "Le bateau", vn: "thuyền", pronunciation: "thouyen", type: "Mer" },
  { id: "pieuvre", fr: "La pieuvre", vn: "bạch tuộc", pronunciation: "bak touok", type: "Mer" },
  { id: "tortue", fr: "La tortue", vn: "rùa", pronunciation: "roua", type: "Mer" },
  { id: "vague", fr: "La vague", vn: "sóng", pronunciation: "song", type: "Mer" },

  { id: "vase", fr: "Le vase", vn: "cái bình", pronunciation: "kaï binh", type: "Maison" },
  { id: "tasse", fr: "La tasse", vn: "cốc", pronunciation: "kop", type: "Maison" },
  { id: "chaise", fr: "La chaise", vn: "ghế", pronunciation: "ghé", type: "Maison" },
  { id: "porte", fr: "La porte", vn: "cửa", pronunciation: "keua", type: "Maison" },
  { id: "fenetre", fr: "La fenêtre", vn: "cửa sổ", pronunciation: "keua so", type: "Maison" },
  { id: "lit", fr: "Le lit", vn: "giường", pronunciation: "zuong", type: "Maison" },
  { id: "livre", fr: "Le livre", vn: "sách", pronunciation: "satch", type: "Maison" },
  { id: "horloge", fr: "L'horloge", vn: "đồng hồ", pronunciation: "dong ho", type: "Maison" },
  { id: "lampe", fr: "La lampe", vn: "đèn", pronunciation: "den", type: "Maison" },

  { id: "voiture", fr: "La voiture", vn: "xe hơi", pronunciation: "xe hoi", type: "Ville" },
  { id: "velo", fr: "Le vélo", vn: "xe đạp", pronunciation: "xe dap", type: "Ville" },
  { id: "feu", fr: "Le feu rouge", vn: "đèn giao thông", pronunciation: "den zao thong", type: "Ville" },
  { id: "pont", fr: "Le pont", vn: "cầu", pronunciation: "cau", type: "Ville" },
  { id: "immeuble", fr: "L'immeuble", vn: "tòa nhà", pronunciation: "toa nia", type: "Ville" },
  { id: "bus", fr: "Le bus", vn: "xe buýt", pronunciation: "xe buit", type: "Ville" },
  { id: "parc", fr: "Le parc", vn: "công viên", pronunciation: "cong vien", type: "Ville" },
  { id: "marche", fr: "Le marché", vn: "chợ", pronunciation: "cho", type: "Ville" },
];

const THEMES = ["Mer", "Maison", "Ville"];

function wordRarity(word) {
  // Heuristique en attendant un vrai calcul de difficulté : plus le mot
  // vietnamien a de syllabes, plus il est considéré rare.
  const syllables = word.vn.trim().split(/\s+/).length;
  return Math.min(3, Math.max(1, syllables));
}
