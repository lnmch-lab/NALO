# VIBE-CODING - Annexe B

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/annexe-b-cloudflare.html

--- SLIDE 1 ---
VIBE-CODING
Annexe B
Créer un compte Cloudflare
Préparation des outils

--- SLIDE 2 ---
Objectif
Utiliser Cloudflare pour DNS, CDN, Pages, Workers ou Turnstile selon le besoin.
Sécurité : mot de passe unique, 2FA si disponible, jamais de clés API, tokens, mots de passe ou fichiers .env dans un dépôt public. Utilisez une adresse e-mail durable pour les comptes de formation.

--- SLIDE 3 ---
Création du compte
Compte sur cloudflare.com, e-mail durable, mot de passe unique.
Vérifier l'e-mail, activer la 2FA.
Ne créer un token API que lorsqu'un outil le demande, droits minimaux.

--- SLIDE 4 ---
Premier déploiement Pages
Workers & Pages → créer un projet Pages.
Connecter GitHub/GitLab, brancher la branche main.
Renseigner commande de build et dossier de sortie.
Variables d'environnement dans le tableau de bord, jamais dans Git.
Tester l'URL de prévisualisation avant le domaine custom.

--- SLIDE 5 ---
Exemples de build
Vite / React : npm run build → dist
Create React App : npm run build → build
Astro : npm run build → dist
HTML statique : dossier contenant index.html

--- SLIDE 6 ---
Checklist
Compte + 2FA OK
Dépôt connecté avec permissions minimales
Secrets hors Git
Site en HTTPS
Test de déploiement / retour arrière effectué

