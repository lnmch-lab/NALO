# VIBE-CODING - Séance 11

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session11.html

--- SLIDE 1 ---
VIBE-CODING
Séance 11 : Sécurité et confidentialité
Revue proportionnée au MVP
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Cartographie des données
18h45 – 19h30 : Risques et tableau impact/probabilité
19h30 – 19h45 : Pause
19h45 – 20h45 : Mesures concrètes et secrets
20h45 – 21h30 : Checklist sécurité avant mise en ligne

--- SLIDE 3 ---
Objectifs de la séance
Inventorier les données collectées
Classer les risques impact × probabilité
Définir mesures de réduction prioritaires
Prévoir mentions, consentement, suppression de compte
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Cadre pédagogique (pas un avis juridique)
Accès non autorisé, fuites de secrets, injections, XSS, CSRF.
Abus d'API, perte de données, dépendances vulnérables.
Pas de collecte inutile.
Secrets et sauvegardes : bonnes pratiques.

--- SLIDE 5 ---
Prompt séance 11 — Sécurité
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un consultant en sécurité applicative et protection des données.
Évalue le MVP suivant : [description, stack, données collectées, utilisateurs]. Il est destiné à : [pays ou contexte, si connu].
Réalise une revue proportionnée au projet :
1. Inventorie les données collectées, leur utilité et leur durée de conservation proposée.
2. Identifie les principaux risques : accès non autorisé, fuite de secrets, injections, XSS, CSRF, abus d'API, perte de données et dépendances vulnérables.
3. Classe les risques par impact et probabilité dans un tableau.
4. Donne des mesures concrètes de réduction du risque, classées par priorité.
5. Propose les mentions ou écrans à prévoir : politique de confidentialité, consentement, suppression de compte, contact.
6. Vérifie les bonnes pratiques de gestion des secrets et sauvegardes.
7. Fournis une checklist de sécurité avant mise en ligne.
Ne présente pas ceci comme un avis juridique. Reste concret et adapté à un MVP, sans recommander de collecte de données non nécessaire.

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
Remplir l'inventaire des données.
Classer les 5 risques principaux.
Appliquer au moins 3 mesures prioritaires.
Committer docs/security-review.md.

--- SLIDE 8 ---
Livrables attendus
Revue sécurité proportionnée
Checklist avant mise en ligne
Écrans / mentions prévus listés
Pour la suite : Séance 12 — Déploiement avec Cloudflare.

--- SLIDE 9 ---
Récapitulatif
Séance 11 — Sécurité et confidentialité
Inventorier les données collectées
Classer les risques impact × probabilité
Définir mesures de réduction prioritaires
Prévoir mentions, consentement, suppression de compte
Conservez toutes les productions dans le dépôt Git dès maintenant.

