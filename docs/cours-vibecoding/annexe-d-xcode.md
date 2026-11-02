# VIBE-CODING - Annexe D

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/annexe-d-xcode.html

--- SLIDE 1 ---
VIBE-CODING
Annexe D
Installer Xcode
Préparation des outils

--- SLIDE 2 ---
Objectif
Installer l'environnement Apple pour développer et tester iOS (macOS uniquement).
Sécurité : mot de passe unique, 2FA si disponible, jamais de clés API, tokens, mots de passe ou fichiers .env dans un dépôt public. Utilisez une adresse e-mail durable pour les comptes de formation.

--- SLIDE 3 ---
Conditions
Xcode sur macOS uniquement.
macOS compatible avec la version de Xcode.
Espace disque important (simulateurs inclus).
Compte Apple : test local possible ; App Store/TestFlight → programme développeur.

--- SLIDE 4 ---
Installation
Installer via App Store ou portail développeur.
Ouvrir Xcode, accepter licences, composants additionnels.
Settings → Platforms : télécharger simulateur iOS.
Créer un projet SwiftUI de test et le lancer (Run).

--- SLIDE 5 ---
CLI
xcode-select -p
xcodebuild -version

--- SLIDE 6 ---
Checklist
Xcode + composants OK
Simulateur iOS disponible
Projet SwiftUI de test lancé
xcode-select / xcodebuild répondent

