# VIBE-CODING - Séance 7

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session7.html

--- SLIDE 1 ---
VIBE-CODING
Séance 7 : Authentification et rôles
Flux auth, permissions, pièges courants
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Rôles prévus dans le projet
18h45 – 19h30 : Choix du mécanisme d'auth
19h30 – 19h45 : Pause
19h45 – 20h45 : Flux et matrice de permissions
20h45 – 21h30 : Tests manuels et automatisés

--- SLIDE 3 ---
Objectifs de la séance
Comparer options d'authentification adaptées au MVP
Décrire les flux inscription / connexion / reset
Définir une matrice de permissions par rôle
Protéger routes, API et actions sensibles
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Pièges à signaler
Élévation de privilèges
Jetons exposés (logs, front, URLs)
Contrôles uniquement côté client
Messages d'erreur révélant l'existence d'un compte

--- SLIDE 5 ---
Prompt séance 7 — Auth
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un ingénieur sécurité applicative et un développeur full-stack.
Je dois intégrer l'authentification dans [nom du projet]. Les rôles prévus sont : [visiteur, utilisateur, administrateur, etc.]. La stack est : [stack].
Propose une implémentation adaptée au MVP :
1. Compare brièvement l'authentification par fournisseur géré, e-mail/mot de passe et OAuth, puis recommande une option.
2. Décris les flux inscription, connexion, déconnexion, réinitialisation de mot de passe et vérification d'e-mail si nécessaire.
3. Définis précisément les permissions par rôle dans un tableau.
4. Donne les principes de stockage sûr des sessions ou jetons.
5. Montre comment protéger les routes, l'API et les actions sensibles.
6. Explique la gestion des erreurs sans révéler d'information sur les comptes existants.
7. Donne des tests manuels et automatisés à exécuter.
N'écris aucune clé ni aucun secret réel. Signale les pièges courants, notamment l'élévation de privilèges, les jetons exposés et les contrôles effectués uniquement côté client.

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
Choisir et documenter le mécanisme d'auth.
Remplir la matrice rôles × actions.
Implémenter le flux connexion minimal.
Exécuter les tests manuels listés.

--- SLIDE 8 ---
Livrables attendus
docs/auth.md + matrice de permissions
Flux auth fonctionnel en local
Checklist anti-pièges cochée
Pour la suite : Séance 8 — Développement front-end des écrans prioritaires.

--- SLIDE 9 ---
Récapitulatif
Séance 7 — Authentification et rôles
Comparer options d'authentification adaptées au MVP
Décrire les flux inscription / connexion / reset
Définir une matrice de permissions par rôle
Protéger routes, API et actions sensibles
Conservez toutes les productions dans le dépôt Git dès maintenant.

