# Nalo

Premier projet de la formation vibe coding (mairie de Paris).

App perso : photographier un objet, en faire une carte de vocabulaire à collectionner (mot en vietnamien, prononciation, version kawaii de l'objet). Mascotte : le carpeau qui devient dragon.

Site en ligne : https://lnmch-lab.github.io/NALO/

## Architecture

- **Frontend** (`index.html`, `script.js`, `style.css`) : site statique hébergé sur GitHub Pages. Prend la photo, affiche la carte, gère la collection dans `localStorage`.
- **Backend** (`worker/`) : fonction Cloudflare Workers qui reçoit la photo, interroge l'API Claude (Anthropic) pour identifier l'objet et le traduire en vietnamien, et renvoie le résultat. La clé API reste côté serveur, jamais exposée au navigateur.

## Lancer le frontend en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un petit serveur local.

## Déployer le backend (une seule fois)

Prérequis : [Node.js](https://nodejs.org) installé, et un compte [Cloudflare](https://dash.cloudflare.com/sign-up) (gratuit).

```bash
cd worker
npx wrangler login
npx wrangler secret put ANTHROPIC_API_KEY
# coller ta clé API Anthropic (console.anthropic.com) quand demandé
npx wrangler deploy
```

La commande `deploy` affiche l'URL du Worker (ex: `https://nalo-worker.ton-compte.workers.dev`).
Copier cette URL dans `script.js`, constante `WORKER_URL`, puis commit + push.

## Mettre à jour le backend

Après une modification de `worker/worker.js` :

```bash
cd worker
npx wrangler deploy
```
