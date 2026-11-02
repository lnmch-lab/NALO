# VIBE-CODING - Séance 10

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session10.html

--- SLIDE 1 ---
VIBE-CODING
Séance 10 : Tests et débogage
Stratégie pragmatique pour le MVP
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Inventaire des bugs observés
18h45 – 19h30 : Stratégie de test MVP
19h30 – 19h45 : Pause
19h45 – 20h45 : Écriture de tests et corrections
20h45 – 21h30 : Checklist de recette

--- SLIDE 3 ---
Objectifs de la séance
Classer tests unitaires, intégration, E2E, manuels
Couvrir cas nominaux, limites et droits insuffisants
Reproduire les bugs sans inventer de cause
Préparer une checklist de recette
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Symptôme ≠ cause
Distinguer symptôme, cause probable, preuve.
Prioriser parcours utilisateurs et intégrité des données.
Corrections minimales + tests de non-régression.
Ne pas inventer une cause non vérifiée.

--- SLIDE 5 ---
Prompt séance 10 — Qualité
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un ingénieur qualité logiciel.
Voici la fonctionnalité à tester : [description]. Voici la stack : [stack]. Voici les problèmes éventuellement observés : [erreurs, logs, comportement].
Établis une stratégie de test pragmatique pour le MVP :
1. Classe les tests en unitaires, intégration, bout en bout et manuels.
2. Liste les cas nominaux, limites, erreurs, droits insuffisants et régressions importantes.
3. Écris des exemples de tests automatisés adaptés à [framework de test].
4. Propose une procédure de reproduction pour chaque bug décrit.
5. Analyse les logs ou extraits de code fournis sans inventer de cause non vérifiée.
6. Suggère des corrections minimales et sûres, avec leurs tests de non-régression.
7. Termine par une checklist de recette avant démonstration.
Priorise les parcours qui affectent les utilisateurs ou l'intégrité des données. Explique la différence entre symptôme, cause probable et preuve à recueillir.

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
Choisir une fonctionnalité critique.
Écrire au moins 3 tests automatisés.
Reproduire et corriger 1 bug documenté.
Remplir la checklist de recette.

--- SLIDE 8 ---
Livrables attendus
Plan de tests MVP
Tests automatisés commités
Checklist de recette
Pour la suite : Séance 11 — Sécurité, confidentialité, conformité.

--- SLIDE 9 ---
Récapitulatif
Séance 10 — Tests et débogage
Classer tests unitaires, intégration, E2E, manuels
Couvrir cas nominaux, limites et droits insuffisants
Reproduire les bugs sans inventer de cause
Préparer une checklist de recette
Conservez toutes les productions dans le dépôt Git dès maintenant.

