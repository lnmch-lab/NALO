# VIBE-CODING - Annexe A

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/annexe-a-github-gitlab.html

--- SLIDE 1 ---
VIBE-CODING
Annexe A
Installer & Maîtriser Git (avec GitHub & GitLab)
Schémas d'architecture · Tutoriels d'installation (Mac, Windows, Linux) · Configuration · Commandes fondamentales

--- SLIDE 2 ---
1. Objectif & Distinction fondamentale
Objectif : Installer Git sur son ordinateur, comprendre son fonctionnement avec des schémas clairs, le configurer et maîtriser les commandes indispensables pour sauvegarder, collaborer et sécuriser son projet en vibe-coding.
Git (Sur votre ordinateur)
Le logiciel de gestion de versions installé en local.
Fonctionne hors-ligne sur votre machine.
Enregistre chaque étape sous forme de commits.
Vous donne le droit absolu à l'erreur : remonter dans le temps en une seconde si une IA casse le code.
GitHub & GitLab (Dans le Cloud)
Les plateformes d'hébergement distantes connectées à Internet.
Sauvegardent vos projets hors de votre ordinateur.
Permettent le travail d'équipe et la relecture de code (Pull Request).
Déclenchent les déploiements automatiques (vers Cloudflare, Pages ou VPS).
Règle de sécurité n°1 : Activez systématiquement la 2FA sur votre compte. Ne placez jamais de mots de passe, clés API ou fichiers .env dans un dépôt Git public ou privé.

--- SLIDE 3 ---
2. Schéma visuel : Les 4 zones de Git
Pour bien utiliser Git, il suffit de visualiser le voyage d'un fichier à travers quatre zones distinctes :
1. Répertoire de travail
Vos fichiers réels modifiés dans VS Code ou Cursor sur votre disque.
Working Directory
2. Zone d'index
La « salle d'embarquement » des fichiers préparés pour le prochain vol.
Staging Area (git add)
3. Dépôt local
L'historique officiel et scellé des versions sur votre machine.
Local (.git / commit)
4. Dépôt distant
La copie sauvegardée sur GitHub ou GitLab dans le cloud.
Remote (git push)
# Flux des commandes d'une zone à l'autre :
[Répertoire de travail] ──▶ git add . ──▶ [Zone d'index / Staging] ──▶ git commit -m "..." ──▶ [Dépôt local] ──▶ git push ──▶ [GitHub / GitLab]
[Répertoire de travail] ◀── git pull ◀───────────────────────────────────────────────────────────── [GitHub / GitLab]
En résumé : git add prépare ce que l'on veut enregistrer, git commit valide l'étape en local, et git push envoie la sauvegarde en ligne.

--- SLIDE 4 ---
3. Schéma visuel : Le cycle de vie d'un fichier
Dans Git, chaque fichier se trouve toujours dans l'un de ces 4 états :
État du fichier
Ce que cela signifie
Couleur dans git status
Commande pour changer d'état
Non suivi (Untracked)
Fichier fraîchement créé, encore inconnu de Git.
Rouge
git add mon-fichier
Préparé (Staged)
Fichier placé en zone d'index, prêt pour le commit.
Vert
git commit -m "..."
Validé (Committed)
Fichier archivé dans l'historique sans modifications en attente.
(Invisible / Clean)
—
Modifié (Modified)
Fichier déjà suivi mais modifié depuis le dernier commit.
Rouge
git add mon-fichier ou git restore
Le réflexe magique : Tapez git status à tout instant ! C'est votre GPS permanent qui vous affiche la liste exacte des fichiers verts (prêts) et rouges (à préparer ou à ignorer).

--- SLIDE 5 ---
4. Tutoriel d'installation : macOS
Sur Mac, vous avez deux méthodes très simples et officielles pour installer Git :
Méthode 1 : Outils officiels Apple (Le plus rapide)
Ouvrez l'application Terminal (via Spotlight : Cmd + Espace, puis tapez Terminal) et tapez :
git --version
Si Git n'est pas encore installé, macOS affiche automatiquement une invite : « La commande git requiert les outils de développement de ligne de commande ».
Cliquez sur Installer et acceptez la licence.
Vous pouvez aussi forcer cette installation via :
xcode-select --install
Méthode 2 : Via Homebrew (Pour avoir la dernière version)
Si vous utilisez le gestionnaire de paquets Homebrew :
brew install git
Vérifiez que le terminal utilise bien la version Homebrew :
which git
# doit renvoyer /opt/homebrew/bin/git (ou /usr/local/bin/git)
Vérification finale : Fermez et rouvrez votre Terminal, puis tapez git --version. Vous devez voir une réponse du type : git version 2.39.x (ou plus récent).

--- SLIDE 6 ---
5. Tutoriel d'installation : Windows
Sur Windows, installez l'outil officiel Git for Windows qui intègre le moteur Git et l'environnement de commande Git Bash.
Étape 1 : Téléchargement
Rendez-vous sur le site officiel : git-scm.com/download/win.
Téléchargez la version 64-bit Git for Windows Setup.
Alternative en commande PowerShell :
winget install --id Git.Git -e --source winget
Étape 2 : Options clés pendant l'assistant
Éditeur par défaut : Choisissez Use Visual Studio Code as Git's default editor.
Nom de la branche : Choisissez Override the default branch name et saisissez main.
Ligne de commande : Cochez Git from the command line and also from 3rd-party software.
Fins de ligne (Crucial) : Cochez Checkout Windows-style, commit Unix-style line endings.
L'astuce Windows : Utilisez Git Bash (installé avec Git). Il vous fournit un vrai terminal de style Linux très agréable pour taper les mêmes commandes ls, pwd et ssh que sur Mac ou Linux.

--- SLIDE 7 ---
6. Tutoriel d'installation : Linux
Sur Linux ou sur votre serveur virtuel (VPS), Git s'installe en une seule ligne via le gestionnaire de paquets de votre distribution :
Debian, Ubuntu, Linux Mint
sudo apt update
sudo apt install -y git
Fedora, RHEL, AlmaLinux
sudo dnf install -y git
Arch Linux, Manjaro
sudo pacman -S git
Vérification sur votre machine :
git --version
which git
Un message confirmant la présence de Git (ex : git version 2.43.0) doit s'afficher.

--- SLIDE 8 ---
7. Configuration initiale obligatoire (First-Time Setup)
À faire une seule fois : Avant d'enregistrer votre tout premier commit, Git a obligatoirement besoin de connaître votre identité (nom et e-mail). Sans cela, Git refusera d'enregistrer vos modifications.
Ouvrez votre terminal et exécutez ces deux commandes en remplaçant par vos informations :
# 1. Votre nom d'auteur public
git config --global user.name "Prénom Nom"
# 2. Votre adresse e-mail (utilisez la même que sur GitHub ou GitLab !)
git config --global user.email "[email protected]"
# 3. Définir le nom standard de la branche principale par défaut
git config --global init.defaultBranch main
# 4. Activer les jolies couleurs dans le terminal
git config --global color.ui auto
Vérifier votre configuration :
git config --list --show-origin
Vérifiez que votre user.name et user.email apparaissent correctement sans fautes de frappe.

--- SLIDE 9 ---
8. Authentification sécurisée : GitHub & GitLab
Depuis août 2021, GitHub et GitLab interdisent l'utilisation de votre simple mot de passe de compte pour envoyer du code en ligne (git push). Vous devez vous authentifier soit par clé SSH, soit par jeton personnel (Token).
Option 1 : Clé SSH (Recommandée & Définitive)
Une clé SSH vous identifie automatiquement et en toute sécurité sans jamais devoir retaper de mot de passe :
# Générer la clé (appuyez sur Entrée aux questions)
ssh-keygen -t ed25519 -C "[email protected]"
# Afficher et copier la clé publique générée :
cat ~/.ssh/id_ed25519.pub
Collez cette clé dans votre compte :
GitHub : Settings ➔ SSH and GPG keys ➔ New SSH Key.
GitLab : Preferences ➔ SSH Keys ➔ Add new key.
Tester : ssh -T [email protected]
Option 2 : Jeton personnel (Personal Access Token)
Si vous préférez rester en HTTPS, générez un jeton d'accès secret :
GitHub : Settings ➔ Developer Settings ➔ Personal Access Tokens (Tokens classic) ➔ Generate new token ➔ Cochez la case repo.
GitLab : Preferences ➔ Access Tokens ➔ Add new token ➔ Cochez read_repository et write_repository.
Copiez ce jeton dans un gestionnaire de mots de passe. Lors du premier git push, collez ce jeton quand Git demande votre mot de passe.

--- SLIDE 10 ---
9. Tutoriel pas-à-pas : Démarrer son projet
Deux cas de figure classiques se présentent à vous en formation :
Cas A : Créer un nouveau projet local et le publier
# 1. Créer le dossier et y entrer
mkdir mon-projet && cd mon-projet
# 2. Initialiser Git
git init
# 3. Créer les fichiers de base
echo "# Mon Projet MVP" > README.md
echo "node_modules/\n.env\n.DS_Store" > .gitignore
# 4. Préparer et committer
git add .
git commit -m "chore: initialiser le dépôt"
# 5. Définir la branche principale
git branch -M main
# 6. Relier au dépôt GitHub/GitLab créé en ligne
git remote add origin [email protected]:votre-compte/mon-projet.git
# 7. Envoyer pour la première fois
git push -u origin main
Cas B : Récupérer un projet déjà existant en ligne
Si le dépôt a déjà été créé avec un modèle sur GitHub ou GitLab :
# Cloner le projet sur votre machine
git clone [email protected]:votre-compte/mon-projet.git
# Entrer dans le dossier téléchargé
cd mon-projet
# Vérifier l'état
git status
Tous les fichiers et l'historique complet sont immédiatement disponibles sur votre ordinateur !

--- SLIDE 11 ---
10. Le cycle de travail quotidien en 4 commandes
En vibe-coding, à chaque fois que vous dialoguez avec l'IA et que le code proposé fonctionne, appliquez immédiatement cette routine :
Étape
Commande
Ce que vous faites
1. Vérifier
git status
Vous vérifiez quels fichiers ont été ajoutés ou modifiés par l'assistant IA.
2. Inspecter
git diff
Vous relisez ligne par ligne les ajouts (en vert) et suppressions (en rouge).
3. Préparer
git add . (ou git add fichier.js)
Vous placez vos modifications propres dans la zone d'embarquement (staging).
4. Enregistrer
git commit -m "feat: ajout du formulaire"
Vous photographiez définitivement cette étape propre dans l'historique.
5. Sauvegarder
git push
Vous propulsez vos commits locaux vers GitHub/GitLab en ligne.
Bonnes pratiques de messages de commit : Utilisez des préfixes clairs : feat: (nouvelle fonctionnalité), fix: (correction d'un bogue), docs: (documentation README), style: (mise en page CSS), refactor: (nettoyage du code sans changer le résultat).

--- SLIDE 12 ---
11. Schéma & Tutoriel : Les branches et Pull Requests
Une branche est une piste de travail parallèle qui vous permet d'expérimenter une nouvelle idée ou de tester du code IA sans risquer de casser la version stable officielle (main).
# Schéma d'une branche isolée fusionnée après validation :
Branche main : [C1] ─── [C2] ─────────────────────── [C5: Merge PR] ──▶
\ /
Branche feature : └─── [C3] ─── [C4: commit] ─┘
1. Créer et travailler sur une branche
# Créer et basculer sur une nouvelle branche
git switch -c feature-maquette-accueil
# Coder avec l'IA, tester... puis enregistrer :
git add .
git commit -m "feat: maquette de la page d'accueil"
# Envoyer la branche sur GitHub/GitLab
git push -u origin feature-maquette-accueil
2. La Pull Request & Fusion
Ouvrez votre dépôt sur GitHub ou GitLab : un bandeau jaune propose automatiquement de créer une Pull Request (ou Merge Request).
Vérifiez les différences de code et cliquez sur Merge.
De retour sur votre terminal, revenez sur la branche principale et mettez-la à jour :
git switch main
git pull

--- SLIDE 13 ---
12. La boîte à outils de secours : Réparer les erreurs
Pas de panique ! Avec Git, rien n'est jamais définitivement perdu. Voici les 4 situations d'urgence les plus fréquentes :
J'ai cassé un fichier et je veux retrouver la version saine
Annule toutes les modifications non enregistrées sur ce fichier :
git restore mon-fichier.js
(Pour tout restaurer d'un coup : git restore .)
J'ai fait git add trop vite sur un fichier secret (.env)
Retire le fichier de la zone de staging sans effacer son contenu :
git restore --staged .env
N'oubliez pas d'ajouter .env dans votre fichier .gitignore !
J'ai fait une faute dans mon message de commit
Corrige le texte du tout dernier commit (avant de faire push) :
git commit --amend -m "feat: le bon message corrigé"
Un commit déployé provoque une panne en ligne
Crée automatiquement un commit inverse qui annule l'erreur proprement :
git revert HEAD
git push

--- SLIDE 14 ---
13. Checklist de validation
Git est installé et opérationnel : git --version répond sans erreur dans le terminal.
Identité configurée : user.name et user.email sont renseignés dans la configuration globale.
Authentification prête : Clé SSH testée (ssh -T [email protected]) ou jeton personnel enregistré.
Double authentification (2FA) : 2FA activée sur GitHub/GitLab avec les codes de récupération sauvegardés en lieu sûr.
Fichier .gitignore en place : node_modules/, .env et fichiers temporaires ignorés dès le premier commit.
Premier push validé : Le dépôt est visible sur le site web GitHub ou GitLab avec un fichier README.md d'accueil.
Réflexe vibe-coding : Chaque étape validée avec l'assistant IA est enregistrée par un commit explicite.
Vous êtes fin prêt ! Consultez le sommaire des annexes ou le lexique FALC pour approfondir les notions.

