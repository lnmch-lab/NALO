# VIBE-CODING - Séance 6

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session6.html

--- SLIDE 1 ---
VIBE-CODING
Séance 6 : API et règles métier
Endpoints, autorisations, validations
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Rappel modèle de données
18h45 – 19h30 : Inventaire des ressources
19h30 – 19h45 : Pause
19h45 – 20h45 : Contrats API et sécurité
20h45 – 21h30 : Tests prioritaires

--- SLIDE 3 ---
Objectifs de la séance
Définir les endpoints du MVP
Préciser codes HTTP et exemples JSON
Formaliser les règles d'autorisation
Lister les tests automatisés prioritaires
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Sécurité dès la conception API
Auth, contrôle d'accès, validation des entrées.
Limitation de débit si pertinent.
Journalisation sans données sensibles.
Messages d'erreur sûrs (pas de fuite d'info).

--- SLIDE 5 ---
Prompt séance 6 — API
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un développeur back-end attentif à la sécurité.
À partir de ce modèle de données : [coller le modèle ou le lien vers sa description], définis l'API du MVP de [nom du projet].
Pour chaque ressource, fournis :
1. Les endpoints REST ou les opérations équivalentes.
2. La méthode HTTP, le chemin, les paramètres, le corps de requête et les réponses attendues.
3. Les codes d'état HTTP appropriés.
4. Les règles d'autorisation : qui peut lire, créer, modifier ou supprimer.
5. Les validations côté serveur et messages d'erreur sûrs.
6. Un exemple de requête et de réponse JSON.
7. Une liste de tests automatisés prioritaires.
Ajoute une courte section sécurité couvrant authentification, contrôle d'accès, validation des entrées, limitation de débit, journalisation sans données sensibles et gestion des erreurs. Reste compatible avec [framework back-end].

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
Générer le contrat API à partir du modèle.
Vérifier chaque Must a au moins un endpoint.
Rédiger 5 tests prioritaires.
Committer docs/api.md.

--- SLIDE 8 ---
Livrables attendus
docs/api.md
Liste de tests API prioritaires
Section sécurité API
Pour la suite : Séance 7 — Authentification et rôles.

--- SLIDE 9 ---
Récapitulatif
Séance 6 — API et règles métier
Définir les endpoints du MVP
Préciser codes HTTP et exemples JSON
Formaliser les règles d'autorisation
Lister les tests automatisés prioritaires
Conservez toutes les productions dans le dépôt Git dès maintenant.

