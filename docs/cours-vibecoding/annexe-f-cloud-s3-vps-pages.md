# VIBE-CODING - Annexe F

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/annexe-f-cloud-s3-vps-pages.html

--- SLIDE 1 ---
VIBE-CODING
Annexe F
Comparatif Hébergement Cloud : S3, VPS & Pages
Architecture moderne · Coûts réels & pièges de facturation · Souveraineté · Sobriété énergétique (Green IT)

--- SLIDE 2 ---
1. Objectif & Triptyque d'architecture moderne
Objectif : Maîtriser le triptyque moderne d'infrastructure (Pages + VPS + S3) pour déployer rapidement un MVP en vibe-coding, sans risquer de surcoûts imprévus et en privilégiant la souveraineté européenne et la sobriété écologique.
1. Pages (Frontend Edge)
Distribution de l'interface utilisateur statique (Vite, React, Astro, Next export) sur un réseau mondial de diffusion (CDN).
Rôle : Vitesse maximale, coût zéro, zéro serveur web à administrer.
2. VPS / Compute (API & Backend)
Serveur virtuel Linux hébergeant la logique métier (FastAPI, Node.js, Express, conteneurs Docker, base de données SQLite ou PostgreSQL).
Rôle : Traitements dynamiques, calculs et gestion sécurisée des sessions.
3. Stockage Objet compatible S3
Espace de stockage objet illimité pour conserver fichiers lourds, médias (photos, audios, vidéos), exports et sauvegardes chiffrées.
Rôle : Décharger le serveur VPS et stocker à la demande à moindre coût.
Règle d'or de sécurité : Ne placez jamais de secrets, clés d'accès S3 ou mots de passe dans votre code ou dépôt Git. Vos clés API et identifiants doivent rester dans des variables d'environnement (.env local ou tableau de bord sécurisé).

--- SLIDE 3 ---
2. Comprendre le Stockage Objet compatible S3
Contrairement à un disque dur traditionnel (fichiers dans des dossiers arborescents), le stockage objet enregistre chaque fichier comme un objet indépendant doté d'un identifiant unique, de métadonnées et accessible directement via une URL ou une API.
Le standard universel S3 : Créé par Amazon en 2006 (Simple Storage Service), son protocole est devenu la norme industrielle mondiale. Presque tous les hébergeurs (OVHcloud, Scaleway, Hetzner, Infomaniak, Cloudflare R2) proposent une compatibilité S3 native.
Les conteneurs de stockage (Buckets) : Vos fichiers sont déposés dans des compartiments appelés buckets. Un bucket peut être configuré en accès public (pour afficher des images sur votre site) ou privé (sauvegardes, documents confidentiels).
Capacité virtuellement illimitée : Vous ne payez que le volume réellement consommé au mégaoctet près, sans devoir dimensionner ni partitionner un disque rigide.
Accès sécurisé par paires de clés : Chaque application s'authentifie grâce à un Access Key ID et un Secret Access Key, avec la possibilité de générer des URL pré-signées temporaires pour téléverser ou télécharger un fichier en toute sécurité.
En vibe-coding : Toute bibliothèque cliente S3 (ex. boto3 en Python, @aws-sdk/client-s3 en JavaScript) fonctionne avec n'importe quel hébergeur compatible S3 en changeant simplement le paramètre endpoint_url.

--- SLIDE 4 ---
3. Grille tarifaire unifiée : Stockage Objet S3 (Octobre 2026)
Comparatif des tarifs indicatifs hors taxes (HT) constatés pour les régions France / Europe :
Fournisseur
Pays / Juridiction
Prix / Go / mois
Prix / To / mois
Trafic sortant (Egress)
Requêtes API
Profil & Atouts
Hetzner
🇩🇪 Allemagne
~0,0052 €
~5,20 €
Inclus (1 To+)
Gratuites
Tarifs les plus bas d'Europe, idéal stockage brut et sauvegardes.
Infomaniak (Swiss Backup S3)
🇨🇭 Suisse
~0,0045 €
~4,40 € (4,18 CHF)
Inclus (gratuit)
Gratuites
100% renouvelable, données en Suisse. (+1,84 CHF/mois par appareil).
OVHcloud (Object Storage)
🇫🇷 France
~0,0071 €
~7,10 €
Inclus (gratuit)
Gratuites
Excellent rapport qualité/prix, bande passante illimitée, souverain.
Scaleway (iliad)
🇫🇷 France
~0,0100 €
~10,00 €
75 Go offerts puis ~0,01 €/Go
Gratuites
75 Go gratuits/mois. Écosystème très complet (K8s, Serverless, IA).
Infomaniak (Public Cloud IaaS)
🇨🇭 Suisse
~0,0110 €
~11,00 €
Inclus (fair use)
Gratuites
Stockage objet IaaS OpenStack standard, sans licence par appareil.
Clever Cloud (Cellar S3)
🇫🇷 France
~0,0150 €
~15,00 €
Inclus (gratuit)
Gratuites
Idéal pour déploiements PaaS automatiques avec git push.
StackIT (Groupe Schwarz)
🇩🇪 Allemagne
~0,0150 €
~15,00 €
Inclus (fair use)
Gratuites
Cloud souverain allemand d'entreprise (secteur public, industrie).
Exoscale (A1 Telekom)
🇨🇭 / 🇦🇹
~0,0180 €
~18,00 €
Inclus (fair use)
Gratuites
Cloud d'entreprise très stable, haute conformité RGPD / Suisse.
Google Cloud Storage (GCS)
🇺🇸 USA
~0,0200 €
~20,00 €
~0,11 € / Go (~110 €/To)
Payantes (~0,005 €/1k)
Facture très élevée dès qu'il y a du trafic sortant ou des requêtes.
Amazon Web Services (AWS S3)
🇺🇸 USA
~0,0210 €
~21,00 €
~0,08 € / Go (~80 €/To)
Payantes (~0,005 €/1k)
Référence mondiale, immense catalogue, mais pièges de facturation.
3DS Outscale (Dassault)
🇫🇷 France
~0,0220 €
~22,00 €
~0,05 € / Go
Payantes
Cloud souverain d'élite certifié SecNumCloud (défense, santé).

--- SLIDE 5 ---
4. Le piège des coûts cachés : Européens vs Hyperscalers US
Attention aux mauvaises surprises : Sur AWS ou Google Cloud, le prix affiché pour stocker 1 To (~20 €) n'est que la partie visible de l'iceberg. Deux postes de dépense cachés font souvent exploser la facture finale.
1. La bande passante sortante (Egress)
L'Egress désigne chaque octet téléchargé depuis le bucket vers les utilisateurs sur Internet (écoute d'un audio, affichage d'une image, téléchargement de PDF).
Chez OVHcloud, Hetzner, Infomaniak : Le trafic sortant est totalement gratuit ou inclus sans surcoût.
Chez AWS et Google Cloud : Au-delà des 100 premiers Go offerts, chaque To téléchargé coûte entre 80 € et 110 € supplémentaires !
2. La facturation des requêtes API
Chaque appel effectué par votre code (GET pour lire, PUT pour écrire, LIST pour lister les fichiers) est facturé.
Chez les hébergeurs européens : Les appels d'API S3 sont gratuits et illimités.
Chez AWS / GCP : Chaque lot de 1 000 requêtes est payant. Une simple boucle dans votre code, un bogue de rafraîchissement ou le passage d'un bot d'indexation peut générer des dizaines d'euros imprévus en une seule nuit.
Conseil Vibe-Coding : Pour un MVP ou un projet étudiant/débutant, privilégiez les hébergeurs européens où les requêtes et l'egress sont inclus. Vous éviterez tout risque de facture astronomique involontaire.

--- SLIDE 6 ---
5. Simulations concrètes de facturation mensuelle
Comparaison des coûts réels selon l'échelle de votre projet (stockage + trafic sortant) :
Cas 1 : Petit projet / Début
50 Go stockés + 50 Go téléchargés / mois
Scaleway : 0,00 € (inclus dans les 75 Go gratuits)
OVHcloud : ~0,35 € HT
Hetzner : ~0,26 € HT
Google Cloud : ~1,00 € HT
AWS S3 : ~1,05 € HT
Cas 2 : Projet moyen
500 Go stockés + 500 Go téléchargés / mois
Hetzner : ~2,60 € HT
OVHcloud : ~3,55 € HT
Scaleway : ~8,50 € HT
AWS S3 : 10,50 € (stock) + 32 € (egress) ≈ ~43,00 € HT
Google Cloud : 10 € (stock) + 44 € (egress) ≈ ~55,00 € HT
Cas 3 : Distribution média / Audio
2 To stockés + 2 To téléchargés / mois
Hetzner : ~10,40 € HT
OVHcloud : ~14,20 € HT
Scaleway : ~39,25 € HT
AWS S3 : 42 € (stock) + 152 € (egress) ≈ ~195,00 € HT
Google Cloud : 40 € (stock) + 209 € (egress) ≈ ~250,00 € HT
Constat marquant : Sur le cas média (2 To), AWS et Google Cloud sont 15 à 20 fois plus chers qu'OVHcloud ou Hetzner pour exactement le même service, uniquement en raison des frais de trafic sortant !

--- SLIDE 7 ---
6. Zoom sur Infomaniak Swiss Backup : Backup vs Applicatif
L'offre Swiss Backup d'Infomaniak propose une structure tarifaire originale à bien distinguer d'un S3 applicatif classique :
Décomposition du tarif
Volume brut : 4,18 CHF HT / mois par To en paiement annuel (-10%) ou 4,64 CHF HT / mois (soit ~4,40 € HT / To).
Licence par appareil connecté :
Option Cloud (S3 / Swift / SFTP) : +1,84 CHF HT / mois par appareil.
Option Acronis Cyber Protect : +2,85 CHF (Poste), +5,72 CHF (VM).
Garanties : 90 jours d'essai gratuit, bande passante illimitée, hébergement 100% en Suisse hors Cloud Act.
Quand l'utiliser (et quand l'éviter) ?
Idéal pour :
Sauvegarde automatisée de serveurs de production et VPS.
Archives chiffrées de bases de données et dépôts Git.
Outils comme rclone, restic, BorgBackup ou Veeam.
Non adapté pour :
Servir des fichiers directement à des clients web/mobiles (images de profil, streaming audio, téléchargements publics directs) en raison de la contrainte de licence par appareil/utilisateur connecté.
Pour cet usage public direct, préférez OVHcloud Object Storage ou Scaleway.

--- SLIDE 8 ---
7. Empreinte carbone & Sobriété énergétique (Green IT)
Le choix d'un hébergeur a un impact direct sur l'empreinte environnementale de vos applications :
OVHcloud (France)
Refroidissement liquide (Watercooling direct) : Conçu en interne dès 2003, les processeurs sont refroidis par eau en circuit fermé sans climatiseurs énergivores.
PUE record : Entre 1,10 et 1,28 (face à une moyenne mondiale de l'industrie de 1,50 à 1,60).
WUE minimal : 0,26 L d'eau par kWh consommé (contre ~1,8 L de moyenne).
Économie circulaire (Scope 3) : OVH assemble et désassemble ses propres serveurs dans ses usines (Croix, Beauharnois). Les composants (RAM, CPU, disques) sont reconditionnés sur 3 à 4 vies.
Mix électrique bas-carbone : Centres français alimentés par le mix national décarboné (nucléaire + renouvelable) avec suivi transparent via l'Environmental Impact Tracker.
Infomaniak (Suisse)
Pionnier de l'écologie numérique : Énergie 100% renouvelable certifiée (hydraulique locale et panneaux solaires en toiture).
PUE exceptionnel : Inférieur à 1,10 sur les nouveaux centres de données suisses.
Refroidissement passif : Aucune climatisation mécanique polluante ; utilisation exclusive de l'air extérieur filtré.
Compensation à 200% : Compensation du double des émissions résiduelles générées.
Durabilité matérielle : Serveurs amortis et maintenus en production sur une durée prolongée (jusqu'à 10-15 ans) pour minimiser l'impact de fabrication.

--- SLIDE 9 ---
8. Le composant « Pages » (Frontend Jamstack & Edge)
L'approche Jamstack consiste à compiler votre interface en fichiers statiques (HTML, CSS, JS) et à les propulser sur un réseau mondial de serveurs de cache (CDN).
Pourquoi Cloudflare Pages domine ?
Intégration Git directe : Chaque git push déclenche la compilation automatique (Vite, React, Astro, Next export).
Réseau Anycast mondial : Plus de 300 points de présence dans le monde pour un chargement instantané en quelques millisecondes.
Environnements de prévisualisation : Une URL temporaire unique est générée sur chaque branche ou Pull Request.
Gratuité totale : Bande passante et requêtes illimitées sur le forfait gratuit.
Équivalents & Panorama européen
Équivalents US directs : AWS Amplify Hosting et Google Firebase Hosting offrent un service similaire.
Pourquoi pas d'équivalent européen direct ? Aucun acteur européen ne dispose à la fois d'un réseau Anycast mondialisé à 300+ PoP et d'un orchestrateur Jamstack clé-en-main.
Alternatives souveraines européennes :
Clever Cloud Static : Déploiement git push en France, mais sans cache mondial en périphérie.
GitLab / GitHub Pages : Idéal pour la documentation et les petits sites.
Pipeline CI/CD vers S3 : Compilation dans GitLab CI puis synchronisation automatique vers un bucket S3 OVHcloud ou Scaleway.

--- SLIDE 10 ---
9. Le composant « VPS / Compute » (API & Backend)
Alors que l'interface statique tourne sur le CDN Pages, votre logique dynamique (API FastAPI, Node.js, authentification, bases de données) nécessite un serveur d'exécution : le VPS.
Comparatif des offres VPS économiques
Hetzner Cloud (CX22 / CX32) : À partir de ~3,80 € à 4,50 € / mois. Processeurs très rapides, IPv4/IPv6, 20 To de trafic inclus, interface moderne et API puissante.
OVHcloud (VPS Starter / Value) : À partir de ~4,20 € / mois. Datacenters en France (Gravelines, Roubaix, Strasbourg), bande passante illimitée, protection anti-DDoS incluse.
Scaleway (Instances Stardust / Learning) : Instances modulaires à Paris ou Amsterdam, idéales pour brancher facilement sur l'écosystème Serverless et Object Storage.
Infomaniak Public Cloud : Instances basées sur OpenStack avec souveraineté totale et énergie 100% renouvelable en Suisse.
Règles d'or en Vibe-Coding
Conteneurs Docker Compose : Encapsulez votre API, votre base de données et vos tâches de fond dans un fichier docker-compose.yml pour déployer en une seule commande.
Accès SSH par clés : Désactivez systématiquement l'authentification par mot de passe sur le port 22 du serveur.
Pare-feu UFW activé : N'ouvrez que les ports strictement indispensables (SSH 22, HTTP 80, HTTPS 443).
Sauvegardes automatisées : Programmez un script ou une tâche cron qui exporte votre base de données vers votre bucket S3 chaque nuit.

--- SLIDE 11 ---
10. Recommandations d'architectures types
Deux combinaisons d'infrastructure adaptées aux besoins concrets du développement moderne :
Architecture 1 : Vibe-Coding & Prototypage rapide
Objectif : Démarrage immédiat, zéro friction, budget minimal (~4 € / mois).
Frontend : Cloudflare Pages (gratuit, ultra-rapide, previews Git sur chaque branche).
Backend API : Petit VPS chez Hetzner (CX22 à ~4 €/mois) ou OVHcloud (Starter à ~4 €/mois) avec Docker Compose.
Fichiers & Médias : Scaleway S3 (75 Go gratuits/mois) ou Cloudflare R2 (10 Go gratuits, 0 € de frais d'egress).
Base de données : SQLite local dans un volume monté ou conteneur PostgreSQL léger.
Architecture 2 : Production Souveraine & Écologique
Objectif : Conformité RGPD stricte, données hors Cloud Act, empreinte carbone minimale.
Frontend : GitLab Pages ou frontend servi via Nginx / Caddy sur VPS européen.
Backend API : VPS / Instance Public Cloud chez OVHcloud ou Infomaniak.
Stockage Médias : OVHcloud Object Storage (Région Gravelines ou Roubaix, ~7 €/To/mois, egress gratuit).
Sauvegardes & Archives DB : Infomaniak Swiss Backup (chiffré en Suisse, ~6 €/To/mois avec licence S3).
À retenir : Vous pouvez démarrer votre projet en Architecture 1 pour valider votre MVP en formation, puis migrer facilement vers l'Architecture 2 pour la mise en production officielle.

--- SLIDE 12 ---
11. Checklist de décision d'infrastructure
Mon front est-il statique ou dynamique ? Si statique ou Jamstack (React/Vite/Astro), privilégiez un hébergement Pages sur CDN mondial.
Mon application manipule-t-elle des fichiers lourds ? Déchargez immédiatement le VPS vers un bucket S3 pour éviter de saturer le disque dur de la machine.
Ai-je vérifié les frais de trafic sortant (Egress) ? Bannissez les hyperscalers US (AWS/GCP) si vos utilisateurs téléchargent des audios, vidéos ou documents en volume.
Où doivent résider les données ? Si les données sont soumises au secret professionnel, aux données de santé ou au RGPD strict, choisissez des hébergeurs européens (OVHcloud, Scaleway, Infomaniak, Hetzner).
Les secrets sont-ils protégés ? Clés d'accès S3, jetons API et mots de passe stockés uniquement dans les variables d'environnement, jamais dans Git.
Le plan de secours existe-t-il ? Sauvegarde automatisée de la base de données vers un stockage externe sécurisé et test de restauration validé.
Consultez le sommaire des annexes et le lexique FALC pour approfondir les notions techniques.

