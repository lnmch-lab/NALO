# VIBE-CODING - Séance 8

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session8.html

--- SLIDE 1 ---
VIBE-CODING
Séance 8 : Développement du front-end
Composants, états, accessibilité
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Choix de l'écran prioritaire
18h45 – 19h30 : Structure des composants
19h30 – 19h45 : Pause
19h45 – 20h45 : Implémentation guidée
20h45 – 21h30 : Checklist responsive / a11y

--- SLIDE 3 ---
Objectifs de la séance
Découper l'UI en composants réutilisables
Gérer chargement, erreur, vide, succès
Brancher les appels API avec gestion d'erreur
Valider responsive et accessibilité
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Ne pas croire l'API parfaite
Prévoir latences, erreurs, réponses incomplètes.
États UI explicites pour l'utilisateur.
Accessibilité dès le premier composant.
Si la stack exacte manque : expliquer l'alternative.

--- SLIDE 5 ---
Prompt séance 8 — Front-end
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un développeur front-end senior.
Je veux implémenter l'écran ou la fonctionnalité suivante pour [nom du projet] : [décrire l'écran/la fonctionnalité]. J'utilise [React/Vue/Angular/Flutter/SwiftUI/autre] et le design doit être responsive.
Découpe le travail en composants réutilisables. Fournis :
1. La structure des composants et leurs responsabilités.
2. Les props, états locaux et données nécessaires.
3. La gestion des chargements, erreurs, états vides et succès.
4. Le code complet des composants principaux, avec les chemins de fichiers.
5. Les styles ou classes nécessaires, en privilégiant l'accessibilité.
6. Les appels API et la gestion de leurs erreurs.
7. Les tests de composants prioritaires.
8. Une checklist responsive et accessibilité.
Ne suppose pas que l'API fonctionne parfaitement : prévois les erreurs, latences et réponses incomplètes. Si une décision dépend de ma stack exacte, explique l'alternative au lieu d'inventer.

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
Implémenter un écran Must complet.
Couvrir les 4 états UI.
Tester clavier + contraste basique.
Committer avec message conventionnel.

--- SLIDE 8 ---
Livrables attendus
Écran prioritaire fonctionnel
Checklist responsive / a11y
Au moins un test de composant
Pour la suite : Séance 9 — Version mobile (natif ou multiplateforme).

--- SLIDE 9 ---
Récapitulatif
Séance 8 — Développement du front-end
Découper l'UI en composants réutilisables
Gérer chargement, erreur, vide, succès
Brancher les appels API avec gestion d'erreur
Valider responsive et accessibilité
Conservez toutes les productions dans le dépôt Git dès maintenant.

