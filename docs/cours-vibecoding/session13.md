# VIBE-CODING - Séance 13

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session13.html

--- SLIDE 1 ---
VIBE-CODING
Séance 13 : Serveur Linux / VPS et conteneurs
VM locale sûre, Docker, sauvegardes
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
Planning de la séance
18h30 – 18h45 : Choix VirtualBox / UTM / autre
18h45 – 19h30 : Installation VM et durcissement minimal
19h30 – 19h45 : Pause
19h45 – 20h45 : Docker Compose et secrets
20h45 – 21h30 : Sauvegardes et healthcheck

--- SLIDE 3 ---
Objectifs de la séance
Créer une VM Linux de test raisonnable
Configurer utilisateur non-root et bonnes pratiques SSH
Définir docker-compose si pertinent
Tester sauvegarde et restauration
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 4 ---
Prudence réseau
NAT par défaut ; pas d'exposition Internet.
Secrets hors Git (.env local).
Pare-feu minimal (UFW).
Snapshot propre après installation.

--- SLIDE 5 ---
Prompt séance 13 — Linux / Docker
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un administrateur système Linux et un ingénieur DevOps prudent.
Je veux préparer un environnement de test similaire à un VPS pour déployer [nom du projet]. Je vais utiliser une VM Linux locale avec [Ubuntu/Debian/autre] et, si pertinent, Docker Compose.
Donne-moi une procédure sûre et pédagogique pour :
1. Créer la VM avec des ressources raisonnables pour un poste de développement.
2. Installer les mises à jour, créer un utilisateur non-root et configurer SSH avec des bonnes pratiques.
3. Installer Docker et Docker Compose si cela convient à ma stack.
4. Définir les services nécessaires dans docker-compose.yml (application, base de données, proxy si justifié).
5. Gérer les variables d'environnement et les secrets sans les mettre dans Git.
6. Configurer un pare-feu minimal et expliquer les ports ouverts.
7. Mettre en place des sauvegardes de la base et une procédure de restauration testée.
8. Vérifier la santé des services, les logs et le redémarrage après incident.
Distingue clairement les commandes à lancer dans la VM de celles à lancer sur ma machine hôte. N'expose aucun service sur Internet par défaut.

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
Créer la VM et un snapshot propre.
Déployer l'app en local dans la VM.
Tester une restauration de base.
Committer docker-compose.yml sans secrets.

--- SLIDE 8 ---
Livrables attendus
VM opérationnelle + snapshot
docker-compose.yml (si pertinent)
Procédure de restauration testée
Pour la suite : Séance 14 — Documentation et démonstration.

--- SLIDE 9 ---
Récapitulatif
Séance 13 — Serveur Linux / VPS et conteneurs
Créer une VM Linux de test raisonnable
Configurer utilisateur non-root et bonnes pratiques SSH
Définir docker-compose si pertinent
Tester sauvegarde et restauration
Conservez toutes les productions dans le dépôt Git dès maintenant.

