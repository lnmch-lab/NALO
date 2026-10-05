const stages = ["Carpeau 🐟", "Carpe dorée 🐠", "Jeune dragon 🐉", "Dragon ✨"];
let stage = 0;

document.getElementById("evolve").addEventListener("click", () => {
  stage = (stage + 1) % stages.length;
  document.getElementById("status").textContent = stages[stage];
});
