# VIBE-CODING - Séance 5

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session5.html

--- SLIDE 1 ---
VIBE-CODING
Séance 5 : Modélisation des données
Entités, relations, schéma MVP
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Objets métier du MVP
18h45 – 19h30 : Entités et relations
19h30 – 19h45 : Pause
19h45 – 20h45 : Schéma et index
20h45 – 21h30 : Données de démo fictives

--- SLIDE 3 ---
Objectifs de la séance
Identifier entités, attributs et contraintes
Décrire relations et cardinalités
Produire un schéma SQL / modèles ORM
Prévoir timestamps et confidentialité
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Modéliser juste assez
Ne modéliser que le nécessaire au MVP.
Attention particulière aux droits d'accès.
created_at / updated_at systématiques.
Données de démo réalistes mais fictives.

--- SLIDE 5 ---
Prompt séance 5 — Données
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un concepteur de base de données et un développeur back-end.
Mon application [nom] doit gérer les objets suivants : [utilisateurs, contenus, réservations, tâches, etc.]. Les principales actions sont : [actions].
Conçois un modèle de données pour le MVP :
1. Identifie les entités, leurs attributs, leurs types et les contraintes importantes.
2. Décris les relations et cardinalités.
3. Fournis un diagramme entité-association en Mermaid.
4. Propose un schéma SQL ou les modèles de l'ORM correspondant à [PostgreSQL/SQLite/Firebase/autre].
5. Ajoute les index utiles et justifie-les.
6. Prévois created_at, updated_at et, si pertinent, un mécanisme de suppression logique.
7. Donne des données de démonstration réalistes mais fictives.
8. Explique les règles d'intégrité et les décisions de confidentialité.
Ne modélise que ce qui est nécessaire au MVP. Vérifie particulièrement les relations entre utilisateurs, droits d'accès et données sensibles.

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
Lister les objets Must uniquement.
Générer le modèle et le diagramme Mermaid.
Valider les relations utilisateurs / droits.
Committer docs/data-model.md + schéma.

--- SLIDE 8 ---
Livrables attendus
docs/data-model.md
Schéma SQL ou modèles ORM
Jeu de données de démonstration fictives
Pour la suite : Séance 6 — Définir l'API et les règles métier.

--- SLIDE 9 ---
Récapitulatif
Séance 5 — Modélisation des données
Identifier entités, attributs et contraintes
Décrire relations et cardinalités
Produire un schéma SQL / modèles ORM
Prévoir timestamps et confidentialité
Conservez toutes les productions dans le dépôt Git dès maintenant.

