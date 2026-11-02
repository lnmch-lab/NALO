# VIBE-CODING - Séance 9

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session9.html

--- SLIDE 1 ---
VIBE-CODING
Séance 9 : Développement mobile
Navigation, permissions, hors ligne
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Cible Android / iOS / les deux
18h45 – 19h30 : Architecture d'écran
19h30 – 19h45 : Pause
19h45 – 20h45 : Implémentation et permissions
20h45 – 21h30 : Tests émulateur / simulateur

--- SLIDE 3 ---
Objectifs de la séance
Architecturer un écran mobile et sa navigation
Gérer permissions et accès API
Indiquer clairement l'absence de connexion
Respecter accessibilité mobile
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Règles mobiles
Pas de permission inutile.
Ne collecter que les données indispensables.
Respecter les conventions de plateforme.
Adapter aux tailles d'écran.

--- SLIDE 5 ---
Prompt séance 9 — Mobile
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un développeur mobile expérimenté.
Je développe l'application mobile [nom] pour [Android/iOS/Android et iOS] avec [Kotlin/Jetpack Compose, Swift/SwiftUI, Flutter, React Native]. La fonctionnalité à réaliser est : [fonctionnalité].
Aide-moi à l'implémenter en couvrant :
1. L'architecture de l'écran et la navigation.
2. Les modèles de données et l'accès à l'API.
3. Les permissions nécessaires sur le téléphone et leur justification.
4. La gestion hors ligne minimale ou l'indication claire d'absence de connexion.
5. Les états de chargement, erreur et absence de données.
6. L'adaptation aux différentes tailles d'écran.
7. L'accessibilité mobile : libellés, lecteur d'écran, contraste, taille tactile.
8. Le code des fichiers essentiels et les étapes de test sur émulateur/simulateur.
Respecte les conventions de la plateforme. N'ajoute pas de permission inutile et évite de collecter des données personnelles qui ne sont pas indispensables à la fonctionnalité.

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
Choisir une fonctionnalité Must mobile.
Lancer sur émulateur ou appareil.
Justifier chaque permission demandée.
Documenter le test dans docs/mobile.md.

--- SLIDE 8 ---
Livrables attendus
Écran mobile testé
Liste des permissions justifiées
Note hors ligne / absence de réseau
Pour la suite : Séance 10 — Tests et débogage.

--- SLIDE 9 ---
Récapitulatif
Séance 9 — Développement mobile
Architecturer un écran mobile et sa navigation
Gérer permissions et accès API
Indiquer clairement l'absence de connexion
Respecter accessibilité mobile
Conservez toutes les productions dans le dépôt Git dès maintenant.

