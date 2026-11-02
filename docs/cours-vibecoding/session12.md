# VIBE-CODING - Séance 12

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session12.html

--- SLIDE 1 ---
VIBE-CODING
Séance 12 : Déploiement avec Cloudflare
Pages, Workers, DNS, HTTPS
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Services Cloudflare utiles au projet
18h45 – 19h30 : Connexion dépôt et build
19h30 – 19h45 : Pause
19h45 – 20h45 : Variables, domaine, en-têtes
20h45 – 21h30 : Checklist post-déploiement

--- SLIDE 3 ---
Objectifs de la séance
Choisir les services Cloudflare adaptés
Connecter le dépôt et configurer le build
Séparer variables d'environnement du code
Valider HTTPS et plan de retour arrière
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Règles de déploiement
Ne jamais partager de clé API.
Variables sensibles dans le tableau de bord uniquement.
Tester l'URL de prévisualisation avant le domaine custom.
Prévoir un rollback.

--- SLIDE 5 ---
Prompt séance 12 — Cloudflare
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un ingénieur DevOps spécialisé dans les petits projets web.
Je veux déployer [nom du projet] avec cette stack : [stack]. Le dépôt est hébergé sur [GitHub/GitLab]. Je souhaite utiliser Cloudflare pour [Pages/Workers/DNS/Turnstile/autre].
Prépare un plan de déploiement complet et progressif :
1. Détermine quels services Cloudflare sont adaptés et lesquels ne le sont pas.
2. Décris la connexion du dépôt au service de déploiement.
3. Indique les commandes de build, le dossier de sortie et les variables d'environnement à configurer, sous forme de noms fictifs.
4. Explique la séparation développement, préproduction et production si elle est utile.
5. Configure un domaine personnalisé et HTTPS en expliquant les vérifications DNS nécessaires.
6. Ajoute les en-têtes de sécurité web recommandés et leur objectif.
7. Prévois un plan de retour arrière en cas d'échec.
8. Fournis une checklist de validation post-déploiement.
Ne me demande jamais de partager une clé API ou un mot de passe. Précise clairement les étapes qui nécessitent un compte Cloudflare et celles qui peuvent être testées localement.

--- SLIDE 6 ---
Cadre commun (à coller si besoin)
À ajouter en fin de prompt pour ancrer le contexte formation et les contraintes de sécurité.
Contexte : je suis en formation et je développe [nom du projet], une application [web/mobile] destinée à [public cible].
Contraintes :
- Explique chaque choix avec un vocabulaire accessible.
- Procède étape par étape et attends ma validation entre les grandes étapes.
- Ne génère pas de secret, clé API ou mot de passe dans le code.
- Indique les prérequis, les commandes à exécuter et les fichiers à créer ou modifier.
- Quand tu proposes du code, donne des blocs complets, testables, et précise où les placer.
- Signale les risques de sécurité, de confidentialité et d'accessibilité.

--- SLIDE 7 ---
Atelier pratique
Déployer une prévisualisation Cloudflare Pages.
Configurer les variables (noms fictifs en doc).
Tester HTTPS sur l'URL fournie.
Documenter le rollback.

--- SLIDE 8 ---
Livrables attendus
URL de prévisualisation fonctionnelle
docs/deploy-cloudflare.md
Checklist post-déploiement
Pour la suite : Séance 13 — VM Linux / VPS et conteneurs.

--- SLIDE 9 ---
Récapitulatif
Séance 12 — Déploiement avec Cloudflare
Choisir les services Cloudflare adaptés
Connecter le dépôt et configurer le build
Séparer variables d'environnement du code
Valider HTTPS et plan de retour arrière
Conservez toutes les productions dans le dépôt Git dès maintenant.

