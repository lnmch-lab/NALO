# VIBE-CODING - Annexe E

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/annexe-e-vm-linux.html

--- SLIDE 1 ---
VIBE-CODING
Annexe E
Créer une VM Linux (simulation VPS)
Préparation des outils

--- SLIDE 2 ---
Objectif
Créer un environnement isolé pour tester installation, Docker, sauvegardes et sécurité sans exposition Internet.
Sécurité : mot de passe unique, 2FA si disponible, jamais de clés API, tokens, mots de passe ou fichiers .env dans un dépôt public. Utilisez une adresse e-mail durable pour les comptes de formation.

--- SLIDE 3 ---
Solutions
VirtualBox : gratuit, multi-OS.
UTM : adapté aux Mac (Apple Silicon).
VMware / Hyper-V selon l'environnement.
Préférer Ubuntu Server LTS ou Debian stable.

--- SLIDE 4 ---
Ressources conseillées
2 cœurs virtuels
2 à 4 Go de RAM (4 Go plus confortable avec Docker)
20 à 40 Go disque dynamique
Réseau NAT au départ

--- SLIDE 5 ---
Après installation
sudo apt update && sudo apt upgrade -y
Installer curl, git, ca-certificates, ufw
Créer ~/apps/[nom-du-projet]
Snapshot propre après install
Docker optionnel : vérifier docker --version et docker compose version
UFW : autoriser OpenSSH avant enable si besoin

--- SLIDE 6 ---
Checklist
VM démarre, utilisateur non-root, mises à jour OK
Snapshot propre existe
Réseau NAT (ou ouvertures comprises)
Secrets dans .env local uniquement
Déploiement / logs / arrêt propres testés
Restauration testée

