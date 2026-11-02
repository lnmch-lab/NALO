# VIBE-CODING - Séance 4 : Cloudflare, formulaires et stockage R2 ou OVH

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session4.html

--- SLIDE 1 ---
VIBE-CODING
Séance 4 : Cloudflare, formulaires et stockage R2 ou OVH
Passer d’une maquette à un formulaire qui enregistre réellement des informations et des commentaires.
3 h · 18 h 30–21 h 30 · Reprise après les vacances

--- SLIDE 2 ---
Dès l’ouverture : combien de projets accompagner ?
Inscrivez votre projet et votre besoin d’aide dans le pad.
Ouvrir le pad des projets fil rouge ↗
Une ligne par projet
Nom · membres · lien · blocage du soir.
Dernière heure réservée
50 minutes d’accompagnement ÷ nombre de projets.
Comptes : Cloudflare pour tout le monde ; OVH pour le parcours payant. Sans activation R2, repli GitHub + Pages.
AWS, GCP et Azure : comparaison aujourd’hui, configuration aux cours suivants.Préparer les comptes et organiser les passages
Comptes à préparer dès maintenant : créez votre compte Cloudflare et vérifiez votre adresse électronique. Pour le parcours OVH, créez aussi un compte sur OVHcloud : l’activation d’un projet Public Cloud demande un moyen de paiement et engage une facturation à l’usage. Celles et ceux qui ne peuvent pas payer suivent le parcours Cloudflare R2 dans sa franchise gratuite, ou le repli GitHub + Pages si l’activation est impossible. Aucun achat OVH n’est nécessaire pour participer.
Aujourd’hui : configuration de Cloudflare R2 ou d’OVH, au choix. Nous verrons dans les cours suivants comment configurer AWS, Google Cloud et Azure ; aujourd’hui, ces trois services servent uniquement à l’exercice de comparaison des tarifs.« Combien de projets fil rouge ont besoin de mon aide ce soir ? Pour chacun : qui porte le projet, quel blocage et quel résultat attendre ? »
À faire maintenant, par les étudiant·es : ajoutez votre projet à la liste dans le pad Projets fil rouge.
Indiquez le nom du projet, les membres du groupe, le lien du projet et le besoin d’accompagnement de ce soir. Une ligne par projet.
Compter les projets inscrits dans le pad, puis noter l’ordre de passage et le besoin de chacun au tableau. Réserver la dernière heure entière.
Sur 60 min : 5 min de lancement, 50 min d’accompagnement, 5 min de bilan. Pour N projets : 50 ÷ N minutes par projet.
Exemples : 2 projets → 25 min ; 4 → 12 min 30 s ; 5 → 10 min. Si aucun projet ne demande d’aide, utiliser les 50 min en atelier autonome avec revue croisée.

--- SLIDE 3 ---
Reprise : ce que nous avons travaillé en séance 3
Cartographier les écrans du MVP et décrire trois écrans prioritaires dans docs/ux.md.
Prévoir les états vide, chargement, erreur et confirmation ; vérifier clavier, contrastes et libellés.
Comparer la capture et le dépôt awesome-vibecoding avec un regard critique.
Vérifier les prix, conditions d’accès et usages des données de trois outils, avec date et sources officielles.
Publier outils.html avec filtre : branche, commit, pull request relue, fusion et contrôle de l’URL Cloudflare Pages.
Ces éléments sont les objectifs du support précédent : nous vérifions maintenant ce qui a effectivement été terminé.

--- SLIDE 4 ---
Quiz de reprise · 1/6
À quoi sert un wireframe ?
À décrire la structure d’un écran et l’action principale avant les détails visuels.
À stocker les mots de passe.
À remplacer les tests utilisateurs.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 1. Un wireframe décrit les blocs et le parcours ; une belle image ne prouve pas que l’action fonctionne.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 5 ---
Quiz de reprise · 2/6
Quels états prévoir pour un formulaire ?
Uniquement la confirmation.
Vide, saisie, chargement, erreur et confirmation.
Seulement une animation.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 2. Le parcours doit rester compréhensible en cas d’attente, de données invalides ou de panne.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 6 ---
Quiz de reprise · 3/6
Quel contrôle d’accessibilité est pertinent ?
Masquer les libellés pour gagner de la place.
Différencier les erreurs uniquement par du rouge.
Parcourir le formulaire au clavier et associer chaque champ à un libellé.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 3. Le clavier, les libellés et les messages explicites rendent le formulaire utilisable.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 7 ---
Quiz de reprise · 4/6
Comment vérifier une liste d’outils trouvée en ligne ?
Consulter les pages officielles, dater les prix et vérifier les conditions et intérêts de la source.
Recopier le classement le plus populaire.
Considérer que tous les outils sont gratuits.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 1. La séance 3 demandait une comparaison critique et trois fiches datées et sourcées.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 8 ---
Quiz de reprise · 5/6
Comment publier outils.html avec relecture ?
Modifier directement la production sans contrôle.
Branche → commit et push → aperçu → pull request relue → fusion → vérification en production.
Une maquette locale suffit.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 2. Un aperçu permet de contrôler le changement avant sa fusion ; vérifier aussi le résultat publié.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 9 ---
Quiz de reprise · 6/6
Un formulaire sur un site statique conserve-t-il automatiquement les réponses ?
Oui, grâce au bouton Envoyer.
Oui, un dépôt privé suffit.
Non : il faut un traitement serveur et un stockage ; les secrets restent côté serveur.
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouillerAfficher la correction
Réponse 3. C’est le pont vers aujourd’hui : Pages affiche, un Worker traite, le stockage conserve.
Vote individuel, puis explication en binôme. Compter un point par bonne réponse.

--- SLIDE 10 ---
Bilan du quiz et travaux à reprendre
Mot de passe pour afficher les corrections
Déverrouiller les corrections
Corrections déverrouillées pour cette ouverture du support. Masquer et verrouiller
5–6 bonnes réponses : poursuivre ; 3–4 : reprendre les notions hésitantes ; 0–2 : démonstration guidée avec un binôme.
À vérifier avec le groupeÉtat à annoncerSuite
docs/ux.md et trois écransFait / à reprendre / bloquéChoisir l’écran de saisie
Trois fiches outils et comparaisonFait / à reprendre / bloquéCompléter les sources manquantes
outils.html et URL PagesFait / à reprendre / bloquéOuvrir l’URL et tester le filtre
Dépôt, aperçu et relectureFait / à reprendre / bloquéVérifier les accès avant l’atelier
Noter les reprises dans une issue avec responsable et prochaine action. Les blocages propres aux projets rejoignent l’heure fil rouge.

--- SLIDE 11 ---
Déroulé : garder une heure pour les projets
18 h 30–18 h 35 · Recensement des projets et des besoins (5 min)
18 h 35–18 h 50 · Rappel, quiz et bilan de reprise (15 min)
18 h 50–19 h 10 · Devis de stockage en groupes, avec schémas et repères en ressources (20 min)
19 h 10–19 h 30 · Installation de KeePassXC, jeton Cloudflare et choix du stockage (20 min)
19 h 30–19 h 45 · Pause (15 min)
19 h 45–20 h 20 · Atelier formulaire → Worker → OVH (35 min)
20 h 20–20 h 30 · Tests et livrables (10 min)
20 h 30–21 h 30 · Projets fil rouge (60 min)
Si les accès bloquent, suivre la démonstration du formateur avec des données fictives et garder le diagnostic individuel pour le fil rouge.

--- SLIDE 12 ---
Objectif : prouver un enregistrement
1. FormulaireLa personne saisit
→
2. WorkerLe serveur vérifie
→
3. Stockage OVH ou R2Le fichier est conservé
Le stockage se place après la validation serveur. La confirmation remonte au formulaire uniquement après une écriture réussie.
Créer un jeton Cloudflare limité au besoin de déploiement et vérifier sa validité.
Choisir R2 Standard avec sa franchise gratuite ou OVH payant ; relier le stockage au Worker sans exposer de clés.
Envoyer un titre, une information et un commentaire depuis un formulaire accessible.
Retrouver un objet JSON privé dans le bucket choisi ; n’afficher « enregistré » qu’après confirmation du stockage.
Comparer AWS S3, Google Cloud Storage, Azure Blob et OVH avec leurs limites de compatibilité et de tarification.

--- SLIDE 13 ---
Qui fait quoi ?
NavigateurFormulaire sur Pages→
WorkerVérifier et traiter→
R2 ou OVHConserver le fichier
Déploiement
Jeton API Cloudflare → autorise la mise à jour du Worker.
Enregistrement
R2 → liaison DATA.
OVH → clés S3 conservées dans le Worker.
Le navigateur ne reçoit aucune clé secrète.Voir les responsabilités et le trajet détaillé
[ Navigateur ]Formulaire sur PagesTitre · information · commentaire
→POST HTTPS
Contenu JSON
[ Worker Cloudflare ]Validation des champs
Contrôle anti-abusOVH : clés ici · R2 : liaison
→S3 signé (OVH)
ou liaison R2
[ Bucket privé OVH ou R2 ]Un fichier JSON par envoisoumissions/date/identifiant.json
← Retour : Le stockage confirme l’écriture → le Worker renvoie HTTP 201 → le navigateur affiche « Enregistré ».
Pages présente le formulaire ; le Worker traite la demande ; le bucket conserve les données après la fermeture de la page.
Le jeton API Cloudflare autorise l’administration ou le déploiement du Worker. Il ne donne aucun droit sur OVH.
Les identifiants S3 OVH (Access Key ID + Secret Access Key) autorisent l’écriture dans le stockage.
Les visiteurs ne reçoivent aucune de ces clés. Un jeton API n’est ni une base de données ni une connexion utilisateur.
Pour l’atelier, les objets se vérifient dans la console du stockage choisi. La lecture publique des commentaires et leur modération viendront plus tard.
Avec R2 : une liaison interne au compte Cloudflare donne accès au bucket depuis le Worker, sans clés S3. Avec OVH, le Worker signe ses appels avec les clés OVH.

--- SLIDE 14 ---
S3, API, XML et JSON : les repères
2006 · lancement S32020 · cohérence forte chez AWSAujourd’hui · AWS et services compatibles
API
Le contrat pour dialoguer entre logiciels.
POST /api/soumissions
XML
Des données organisées avec des balises.
<titre>Mon projet</titre>
JSON
Des données organisées en clés et valeurs.
{"titre": "Mon projet"}
API = comment dialoguer. XML et JSON = comment écrire les données.Développer les sigles, comparer les formats et retrouver les sources
Une courte histoire du stockage S3
14 mars 2006 · Naissance d’Amazon S3Amazon lance Simple Storage Service : déposer et récupérer des objets dans des buckets par des appels web, sans administrer les disques.
1er décembre 2020 · Une évolution chez AWSAmazon S3 annonce la cohérence forte après écriture : les lectures et listes reflètent les écritures réussies. Cette propriété AWS ne se généralise pas automatiquement à tous les services compatibles.
Aujourd’hui · Des usages au-delà d’AWSOVH propose une API compatible S3 ; Google offre une interopérabilité XML avec certains outils ; Azure Blob utilise une autre API. On stocke documents, images, vidéos, sauvegardes et fichiers de données.
Sources : lancement de S3 · cohérence forte, AWS 2020.
API : la porte d’entrée entre deux logiciels
Application Programming Interface, ou interface de programmation d’application : un contrat qui précise quelles demandes un programme peut envoyer à un autre et quelles réponses attendre. Une API web définit notamment des adresses, méthodes, données et codes de réponse.
[ Formulaire ]
« Enregistrer mon commentaire »
POST /api/soumissions
→ demande en JSON →
← 201 + identifiant ←
[ API du Worker ]
Vérifier et enregistrer
XML et JSON : deux façons d’écrire les mêmes données
XML signifie Extensible Markup Language : langage de balisage extensible. Les balises nomment les informations et leur organisation. JSON signifie JavaScript Object Notation : notation d’objets issue de JavaScript, utilisée pour échanger des données aussi avec d’autres langages.
XML · balises ouvrantes et fermantes<soumission>
<titre>Bibliothèque</titre>
<commentaire>Très utile !</commentaire>
</soumission>
JSON · paires « clé : valeur »{
"titre": "Bibliothèque",
"commentaire": "Très utile !"
}
Les deux exemples décrivent la même ficheTitre → BibliothèqueCommentaire → Très utile !
Une API est un moyen d’interagir ; XML et JSON sont des formats de données. Le nom « API XML » de Google ne signifie pas que les fichiers stockés doivent être en XML : un objet S3 peut contenir une image, une vidéo ou notre fichier JSON.
Sources : définition API · XML, W3C · JSON, RFC 8259.
Quels stockages peut-on utiliser ?
ServiceUtilisation depuis CloudflareIdentité et adaptation
AWS S3API S3 native, requêtes signées SigV4Identité IAM limitée au bucket
OVH Object StorageAPI compatible S3 ; endpoint et région OVHUtilisateur S3 dédié ; vérifier les fonctions prises en charge
Google Cloud StorageAPI XML interopérable avec certains outils S3Clés HMAC et endpoint GCS ; tester la compatibilité
Azure Blob StorageAPI Blob / SDK Azure ; adaptation de l’applicationMicrosoft Entra ou SAS limité ; passerelle S3 éventuelle à exploiter et facturer
Sources : interopérabilité Google · adaptation Azure avec une passerelle. Changer de fournisseur peut demander d’adapter le code.

--- SLIDE 15 ---
Tarifs de stockage : repères vérifiés le 2 novembre 2026
Un gigaoctet = un milliard d’octets. Stockage et trafic se comptent séparément.
Images de 2 mégaoctets
≈ 500 téléchargements pour un gigaoctet transféré.
PDF de 5 mégaoctets
≈ 200 téléchargements.
Livres de 1 mégaoctet
≈ 1 000 téléchargements.
Vidéos de 100 mégaoctets
≈ 10 téléchargements.
Streaming vidéo à 5 mégabits/s
≈ 27 minutes pour une personne.
Streaming audio à 128 kilobits/s
≈ 17 h 20 min pour une personne.
Estimations en unités décimales, hors surcoûts de transfert. Les tailles dépendent de la qualité et de la compression.Ouvrir les tarifs sourcés, les unités et les calculs
Stockage chaud, premier palier, à la demande, hors taxes, crédits et remises. Régions et réplications différentes : ces repères ne constituent pas un classement à service égal.
Offre et localisationPrix par mois et unité publiée100 unités stockées
AWS S3 Standard · Virginie du Nord, us-east-1 · plusieurs AZ0,023 USD par gibioctet/mois
(« GB » chez AWS)2,30 USD
GCS Standard · Iowa, us-central1 · régional≈ 0,020 USD par gibioctet/mois (730 h)≈ 2,00 USD
Azure General Block Blob v2 · West Europe · Hot LRS, réplication locale0,0196 USD par unité « GB »/mois
(compteur Azure)1,96 USD
OVH Standard · Multi Zone · vérifier la région disponible≈ 0,0139941 EUR par gibioctet/mois (730 h)≈ 1,40 EUR
OVH Standard · offre mono-zone / Local Zone selon disponibilité≈ 0,0070956 EUR par gibioctet/mois (730 h)≈ 0,71 EUR
Les colonnes reprennent les unités fournisseurs : vérifier leur définition avant de normaliser. Un gigaoctet (Go, « giga octet » en toutes lettres) = 1 000 000 000 octets. Un gibioctet (Gio) = 1 073 741 824 octets. Attention : AWS nomme « GB » une unité binaire ; conserver la définition propre à chaque fournisseur pour comparer. Ne pas assimiler EUR et USD.
Sources : catalogue AWS us-east-1 · GCS, région Iowa affichée · catalogue Azure filtré · OVH, rubrique Object Storage.
Un gigaoctet de trafic, cela représente quoi ?
Le stockage mesure ce qui reste dans le bucket ; le trafic mesure ce qui est transféré. Une image de deux mégaoctets conservée une fois puis téléchargée 500 fois génère environ un gigaoctet sortant, même si elle n’occupe que deux mégaoctets stockés.
ContenuHypothèse choisiePour un gigaoctet transféré
🖼 ImagesDeux mégaoctets par image≈ 500 téléchargements
📄 Documents PDFCinq mégaoctets par document≈ 200 téléchargements
📚 Livres numériques EPUBUn mégaoctet par livre≈ 1 000 téléchargements
🎬 Vidéos à télécharger100 mégaoctets par vidéo≈ 10 téléchargements
▶ Vidéo en streamingCinq mégabits par seconde≈ 27 minutes pour une personne
🎧 Audio en streaming128 kilobits par seconde≈ 17 h 20 min pour une personne
Ordres de grandeur pédagogiques, calculés en unités décimales, hors en-têtes et retransmissions. Les tailles réelles dépendent de la compression et de la qualité. Un octet = huit bits ; pour une vidéo à cinq mégabits/s : 1 000 000 000 × 8 ÷ 5 000 000 ≈ 1 600 s, soit 27 min.
À retenir : dix personnes regardant chacune dix minutes au même débit représentent environ 3,75 gigaoctets transférés. Un cache Cloudflare peut réduire le trafic lu depuis S3 ; il ne réduit pas le volume regardé par les personnes.

--- SLIDE 16 ---
Exercice en groupes : établir un devis de stockagePourquoi est-ce important de vérifier un tarif ?
Quatre ou cinq groupes de deux à trois personnes. Un devis sourcé par fournisseur.
Groupe 1
AWS S3
Groupe 2
Google Cloud Storage
Groupe 3
Azure Blob
Groupe 4
OVH Object Storage
Groupe 5
Cloudflare R2
Besoin commun : 100 gibioctets stockés · 10 000 écritures · 100 000 lectures · 20 gibioctets sortants par mois.
À rendre : total mensuel, hypothèses, franchises et sources datées. À quatre groupes, le groupe 4 compare OVH et R2.
20 min : 2 min de discussion · 10 min de recherche · 5 min de restitution · 3 min de comparaison.Ouvrir la consigne complète et les liens tarifaires
Première question : pourquoi est-ce important de vérifier ?
Avant de chercher un prix, chaque groupe propose un risque concret si l’on se fie à un tarif ancien, à une réponse d’IA ou à la seule mention « gratuit ».
Organisation : quatre ou cinq groupes de deux à trois personnes. Répartissez les rôles : recherche des sources officielles, calcul du devis et restitution ; à deux, cumulez les deux derniers rôles.
GroupeFournisseur et offre à étudier
1AWS · Amazon S3 Standard
2GCS · Google Cloud Storage Standard
3Azure · Blob Storage Hot
4OVHcloud · Object Storage Standard
5Cloudflare · R2 Standard
Si nous sommes quatre groupes : le groupe 4 compare OVH et Cloudflare R2. Les cinq fournisseurs doivent apparaître dans le bilan collectif.
Le même besoin pour tout le monde
Sur un mois : 100 gibioctets stockés en moyenne, 10 000 écritures d’objets, 100 000 lectures et 20 gibioctets sortants vers un Worker Cloudflare. Une écriture = un PUT ; une lecture = un GET. Pas d’archivage ni de restauration.
Choisissez une localisation européenne et indiquez la réplication. Pour R2, relevez la possibilité de localisation ou de juridiction européenne et ses limites. Signalez toute différence qui empêche de comparer à service égal.
Relevez les prix du stockage, des écritures, des lectures et du trafic sortant. Convertissez les unités si nécessaire : ne confondez pas gigaoctets et gibioctets.
Calculez le total mensuel hors taxes, avant puis après les franchises récurrentes. Distinguez-les des crédits promotionnels ; vérifiez paliers, arrondis et éventuels minimums de facturation.
Indiquez la devise, la date, les hypothèses et les liens officiels. Si vous convertissez en euros, citez le taux de change et sa date. Inscrivez « à vérifier » plutôt qu’un chiffre inventé.
Présentez en une minute votre total et le point de vigilance le plus important. La classe et la réplication choisies répondent-elles au besoin ?
Fiche à rendre : fournisseur · offre · région/juridiction · réplication · unité · stockage · écritures · lectures · sortie réseau · total brut · franchises · total estimé · devise · date · sources · réserves.
Périmètre : le devis porte sur le stockage objet. Le traitement par le Worker commun à toutes les solutions est à chiffrer sur une ligne séparée ; une éventuelle adaptation ou passerelle Azure doit être signalée. Ne créez aucune ressource payante pour cet exercice.
Les diapositives 12 à 15 servent de ressources à consulter pendant la recherche : schémas, vocabulaire et repères tarifaires. Leur lecture est comprise dans le temps de l’exercice.
Durée : 20 min · 2 min de discussion introductive, 10 min de recherche et calcul, 5 min de restitutions, 3 min de comparaison collective.
Points de départ : AWS S3 · GCS · Azure Blob · OVHcloud · Cloudflare R2 · localisation R2.

--- SLIDE 17 ---
Installer le gestionnaire de secrets et créer le jeton
Installer KeePassXCmacOS · Windows · Linux→
Créer un coffreFormation.kdbx→
Créer le jetonCloudflare → API Tokens→
Conserver le jetonEntrée dédiée dans le coffre
Un coffre personnel ; un jeton limité ; aucune clé dans la conversation.
Téléchargement officiel de KeePassXC ↗Ouvrir les installations par système et la création du jeton
Avant de créer le jeton : installer KeePassXC
Pour ce cours, nous utilisons KeePassXC, un gestionnaire de mots de passe de la famille KeePass disponible sur macOS, Windows et Linux. Il conserve les secrets dans un coffre chiffré.
Ouvrez la page officielle de téléchargement KeePassXC et choisissez votre système.
SystèmeInstallation guidée
macOSChoisissez Apple Silicon ou Intel selon votre Mac. Téléchargez le fichier .dmg, ouvrez-le et glissez KeePassXC dans Applications.
WindowsChoisissez l’installateur adapté à votre ordinateur (x64 ou ARM64), ouvrez-le et suivez l’assistant. Lancez ensuite KeePassXC depuis le menu Démarrer.
LinuxDepuis la rubrique Linux officielle, suivez le lien vers le paquet Flatpak recommandé. Utilisez votre gestionnaire de logiciels si Flatpak/Flathub y est déjà disponible ; sinon, suivez les commandes de la page officielle ou faites-vous accompagner.
À faire individuellement : préparer le coffre
Créez une base nommée Formation et enregistrez le fichier Formation.kdbx dans votre espace personnel, en dehors du dépôt Git.
Choisissez une phrase de passe maîtresse longue, unique et mémorisable. Gardez les réglages de chiffrement proposés. Ne partagez pas votre phrase de passe.
Créez le groupe Formation / Cloudflare, puis une entrée Jeton API – séance 4. Après sa création, placez le jeton dans le champ mot de passe ; notez le compte, l’usage et l’expiration sans recopier sa valeur dans les notes.
Enregistrez, verrouillez le coffre, puis vérifiez que vous savez le rouvrir. Conservez une sauvegarde du fichier chiffré dans un autre emplacement personnel sûr ; le coffre et sa phrase de passe sont tous deux nécessaires pour retrouver les secrets.
Critère de réussite : KeePassXC démarre et vous savez créer, enregistrer, verrouiller et rouvrir votre coffre. Le fichier .kdbx, la phrase de passe et les clés ne sont ni publiés ni envoyés à l’IA.
Aide : guide officiel de prise en main.
Ensuite : créer le jeton API Cloudflare
Ouvrir le tableau de bord Cloudflare : profil → My Profile → API Tokens → Create Token. Choisir un jeton utilisateur pour l’exercice.
Nommer le jeton formation-s4-deploiement. Partir d’un jeton personnalisé ou réduire le modèle Edit Cloudflare Workers.
Pour un Worker déjà créé : limiter le rôle à Workers Editor sur ce Worker lorsque cette granularité est proposée. Dans l’interface historique : Account → Workers Scripts → Edit, limité au seul compte de formation.
La création d’un Worker demande un rôle Admin au niveau Workers : la faire dans le tableau de bord avant l’exercice, puis utiliser le jeton restreint pour les mises à jour. Ne pas ajouter DNS, R2 ou KV si non utilisés.
Fixer une expiration courte, par exemple la fin de l’atelier. Vérifier le compte et les permissions dans le récapitulatif, puis créer le jeton.
Copier la valeur une seule fois dans l’entrée KeePassXC préparée. Ne générez pas de nouveau mot de passe à la place du jeton fourni par Cloudflare. Ne jamais la mettre dans le formulaire, une capture, un dépôt ou une conversation avec l’IA.
Les libellés évoluent ; se référer aux étapes officielles et aux rôles Workers.

--- SLIDE 18 ---
GitHub / GitLab : utiliser les secrets pour déployer
Créer le secretRéglages du dépôt→
Ajouter le workflowGitHub ou GitLab→
Faire relireBranche → fusion→
Lancer et vérifierDéploiement manuel
Dans GitHub / GitLab
CLOUDFLARE_API_TOKEN → déployer.
Dans le Worker
Clés OVH / Turnstile → faire fonctionner le service.Avant de commencer : fichiers, droits et variables
Choisissez le parcours correspondant à votre dépôt. Vous saisissez la valeur du jeton dans les réglages du service ; l’IA prépare seulement le code qui référence son nom.
1. Préparer le dépôt et répartir les secrets
Disposer des droits de gestion du dépôt, d’un Worker de formation existant et du jeton limité créé à la diapo 17. Retrouvez ce jeton dans KeePassXC ; ne le collez pas dans une conversation.
Dans le tableau de bord Cloudflare, relever l’identifiant du compte (Account ID). Ce n’est pas une clé secrète.
Les exemples supposent un dossier worker/ contenant le code du Worker, package.json, package-lock.json et sa configuration Wrangler (wrangler.jsonc ou wrangler.toml). Wrangler doit être une dépendance du projet ; vérifier que le nom configuré cible le Worker de formation. Si le Worker est à la racine, adapter les chemins. Comme les variables non secrètes seront saisies dans le tableau de bord à la diapo 21, ajouter "keep_vars": true dans la configuration JSONC, ou keep_vars = true au niveau principal du TOML, pour les conserver lors des redéploiements.
Utiliser une branche principale protégée et relire les changements avant leur fusion. Les exemples lancent le déploiement manuellement, depuis cette branche, pour choisir le moment de l’essai.
ValeurEmplacement pour cet atelierRôle
CLOUDFLARE_API_TOKENSecret GitHub ou variable secrète GitLabAutoriser le déploiement
CLOUDFLARE_ACCOUNT_IDVariable GitHub / GitLabCibler le compte
Clés S3 OVH et clé secrète TurnstileSecrets du Worker Cloudflare, renseignés aux étapes suivantesFonctionner après le déploiement
Important : les secrets du dépôt ne sont pas automatiquement installés dans le Worker. Ici, le déploiement utilise seulement le jeton Cloudflare ; la configuration des secrets S3 suit à la diapo 21.
Pas à pas GitHub et fichier de déploiement
2A. Parcours GitHub : créer le secret et la variable
Ouvrir le dépôt → Settings → Secrets and variables → Actions.
Onglet Secrets → New repository secret : nom CLOUDFLARE_API_TOKEN, valeur copiée depuis KeePassXC, puis Add secret. La valeur ne doit jamais figurer dans le fichier YAML.
Onglet Variables → New repository variable : nom CLOUDFLARE_ACCOUNT_ID, valeur = identifiant du compte, puis enregistrer.
Dans Settings → Environments, créer formation. Si les protections sont disponibles pour votre dépôt, limiter le déploiement à main et ajouter une validation. Protéger aussi la branche principale dans les règles du dépôt.
Ajouter le fichier .github/workflows/deploy-worker.yml ci-dessous dans une branche de travail. Faire relire puis fusionner sur main. Adapter main si votre branche principale porte un autre nom.name: Déployer le Worker de formation
on:
workflow_dispatch:
permissions:
contents: read
jobs:
deploy:
if: github.ref == 'refs/heads/main'
runs-on: ubuntu-latest
environment: formation
defaults:
run:
working-directory: worker
steps:
- uses: actions/checkout@v4
- uses: actions/setup-node@v4
with:
node-version: '22'
- name: Installer les dépendances du Worker
run: npm ci
- name: Déployer sur Cloudflare
env:
CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
CLOUDFLARE_ACCOUNT_ID: ${{ vars.CLOUDFLARE_ACCOUNT_ID }}
run: |
test -n "$CLOUDFLARE_API_TOKEN"
test -n "$CLOUDFLARE_ACCOUNT_ID"
npx --no-install wrangler deploy
2B. GitHub : lancer et contrôler
Ouvrir Actions → Déployer le Worker de formation → Run workflow, choisir main puis confirmer. Le bouton apparaît quand le fichier est présent sur la branche par défaut. Autoriser Actions dans les réglages si nécessaire.
Ouvrir l’exécution : l’installation puis le déploiement doivent réussir. Si une validation d’environnement est configurée, l’effectuer. Le code référence secrets.CLOUDFLARE_API_TOKEN et vars.CLOUDFLARE_ACCOUNT_ID ; ces expressions ne contiennent pas les valeurs réelles.
Dans Cloudflare, vérifier la nouvelle version du Worker et son adresse. Une réponse de test doit confirmer la version déployée ; le formulaire complet ne fonctionnera qu’une fois ses secrets S3 et Turnstile configurés.
Sources : secrets GitHub Actions · déploiement Cloudflare depuis GitHub.
Pas à pas GitLab et fichier de déploiement
3A. Parcours GitLab : protéger la branche et créer les variables
Ouvrir le projet → Settings → Repository → Branch rules (ou Protected branches selon la version). Protéger la branche par défaut et limiter qui peut y pousser ou fusionner.
Aller dans Settings → CI/CD → Variables → Add variable. Choisir le type Variable : clé CLOUDFLARE_API_TOKEN, valeur copiée depuis KeePassXC.
Choisir la visibilité Masked and hidden, cocher Protect variable, désactiver l’expansion de la valeur si l’option est proposée et choisir la portée d’environnement formation. Enregistrer. Sur une ancienne version, masquer la variable avec les options disponibles ; « hidden » dépend de la version.
Ajouter CLOUDFLARE_ACCOUNT_ID, avec l’identifiant du compte. La valeur peut être visible ; la protéger et lui donner la même portée formation.
Vérifier qu’un runner de confiance est disponible pour le projet et autorisé sur la branche protégée. Ajouter le bloc ci-dessous au .gitlab-ci.yml existant, sans remplacer les tâches de publication Pages. Faire relire puis fusionner.deploy_worker_formation:
stage: deploy
image: node:22
environment:
name: formation
rules:
- if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
when: manual
- when: never
script:
- cd worker
- test -n "$CLOUDFLARE_API_TOKEN"
- test -n "$CLOUDFLARE_ACCOUNT_ID"
- npm ci
- npx --no-install wrangler deploy
Le nom formation doit correspondre exactement à la portée des variables. Si le fichier déclare déjà une liste stages:, y ajouter deploy après les étapes de construction si elle est absente, sans supprimer les étapes existantes. Sans liste explicite, GitLab fournit notamment l’étape deploy par défaut. Les variables sont fournies au job par GitLab ; aucune valeur secrète ne figure dans le YAML.
3B. GitLab : lancer et contrôler
Ouvrir Build → Pipelines (ou CI/CD → Pipelines), puis le pipeline de la branche principale après la fusion. Si nécessaire, créer un pipeline depuis cette branche.
Quand les étapes précédentes sont terminées, cliquer sur le bouton de lancement du job manuel deploy_worker_formation. Contrôler son journal puis la version du Worker dans Cloudflare.
Si le jeton semble absent, vérifier le nom, la branche protégée et la portée formation. Un job bloqué en attente peut indiquer qu’aucun runner compatible n’est disponible.
Sources : variables GitLab · déploiement Cloudflare depuis GitLab.
Vérifications, erreurs et fin de l’essai
4. Valider et terminer l’essai
Preuve attendue : un déploiement réussi et une nouvelle version visible dans Cloudflare. Aucun jeton affiché dans les journaux, captures ou livrables.
Ne pas afficher les valeurs pour déboguer : éviter env, printenv, les traces détaillées et les commandes qui impriment les clés. Le masquage ne bloque pas un programme malveillant : relire le code du pipeline et les dépendances avant d’exécuter.
En fin d’atelier : si l’accès était temporaire, révoquer le jeton chez Cloudflare puis retirer sa copie des secrets GitHub/GitLab. Pour un projet qui continue, convenir de sa durée et de son remplacement avec le formateur.
Si une clé fuit : la révoquer et la remplacer. Retirer ensuite les copies exposées ; effacer un message ou un journal ne révoque pas une clé.

--- SLIDE 19 ---
Configurer le stockage : R2 ou OVH, au choix
R2 Standard · franchise gratuite
10 GB-mois · 1 million d’opérations A · 10 millions d’opérations B par mois.
OVH · facturation à l’usage
Compte + projet Public Cloud + moyen de paiement.
Bucket imagesImage publique de test→
GitHubModifier la page et faire relire→
PagesVérifier l’image publiée
Commentaires : autre bucket, toujours privé. Avec R2, le Worker utilise la liaison DATA.
R2 peut demander un moyen de paiement et facture les dépassements. Sans activation possible : image statique GitHub + Pages. Les quotas sont partagés par compte.R2 : créer les buckets et déposer une image
A. Sans dépense prévue : Cloudflare R2 Standard
Franchise gratuite mensuelle, vérifiée le 2 novembre 2026 : 10 GB-mois de stockage (unité Cloudflare, soit environ dix gigaoctets conservés sur un mois), un million d’opérations de classe A et dix millions de classe B. Le trafic sortant R2 est gratuit ; les requêtes et le traitement du Worker ont leurs propres limites. La franchise est partagée à l’échelle du compte et concerne uniquement la classe Standard.
À titre indicatif, dix gigaoctets correspondent à environ 5 000 images de deux mégaoctets, avant prise en compte des autres fichiers. Les opérations incluent aussi les outils et visites : ce n’est pas un quota de photos garanti.
Connectez-vous au tableau de bord Cloudflare → R2 Object Storage. Démarrez l’activation et examinez les conditions de facturation. Si un moyen de paiement est demandé et que vous ne pouvez pas en fournir, utilisez le repli GitHub + Pages décrit ci-dessous.
Choisissez Create bucket. Nommez le premier bucket formation-s4-donnees-identifiant et sélectionnez la classe Standard. Relevez le nom exact ; gardez ce bucket privé pour les commentaires.
Créez un second bucket Standard formation-s4-images-identifiant, réservé aux images. Les deux buckets se partagent les mêmes quotas du compte.
Dans le bucket d’images, ouvrez Objects → Upload, choisissez une image PNG ou JPEG fictive ou libre de droits, inférieure à cinq mégaoctets, puis confirmez. Vérifiez son nom, sa taille et son aperçu : c’est la première preuve de stockage.
Pour l’afficher dans le site pendant l’exercice, ouvrez uniquement les réglages du bucket d’images → Public Development URL → activer l’accès. Copiez l’adresse de développement et ajoutez le nom exact du fichier, par exemple https://pub-….r2.dev/photo.jpg. Ce mode public est limité et destiné aux essais ; un domaine personnalisé sera à prévoir pour la production.
Ajoutez cette URL dans une balise image du site, avec un texte alternatif. N’activez jamais cet accès public sur le bucket des commentaires. Reliez ensuite le bucket privé au Worker à la diapo 21.
Consultez les métriques R2 et la facturation. Gardez l’essai à quelques fichiers et requêtes ; supprimez les images inutiles et désactivez l’URL publique à la fin. La franchise n’est pas un plafond qui garantit le blocage avant facturation.
Sources : quotas R2 · création des buckets · ajout d’objets · accès public de développement.
R2 + GitHub : afficher l’image sans terminal local
Exemple concret : afficher une image R2 avec GitHub, sans terminal local
Résultat attendu : une image photo-atelier.jpg stockée dans R2 et affichée sur votre site Cloudflare Pages. Tout se fait dans les interfaces web Cloudflare et GitHub. Pour cette lecture d’image publique, aucun Worker ni aucune clé S3 ne sont nécessaires.
Vérifier la connexion du site : dans Cloudflare → Workers & Pages → votre projet Pages → Settings → Builds & deployments, repérez le dépôt GitHub relié et la branche de production. Les libellés peuvent varier ; relevez ces deux informations. Si le site n’est pas encore relié, créez un projet Pages avec Connect to Git, autorisez le dépôt et conservez les réglages de construction adaptés au projet.
Ajouter l’image : dans Cloudflare R2, ouvrez uniquement le bucket d’images créé ci-dessus → Objects → Upload. Déposez photo-atelier.jpg, puis vérifiez sa présence. L’image choisie doit pouvoir être diffusée publiquement.
Obtenir son adresse : dans les réglages de ce bucket d’images, activez Public Development URL. Copiez le domaine https://pub-….r2.dev et ajoutez /photo-atelier.jpg. Ouvrez l’adresse complète dans un autre onglet : l’image doit apparaître. Ne faites pas cette opération sur le bucket de commentaires.
Ouvrir le dépôt GitHub : dans votre navigateur, ouvrez le fichier HTML de la page à modifier, puis cliquez sur le crayon Edit this file. Dans un projet React/Next.js, ouvrez plutôt le composant de la page et adaptez sa syntaxe ; ne modifiez pas un export généré.
Insérer l’image : collez l’exemple ci-dessous dans le contenu de la page, en remplaçant l’adresse entière par la vôtre. L’URL est publique et peut figurer dans le code ; aucune clé ne doit l’accompagner.
<!-- Exemple pour une page HTML -->
<img
src="https://pub-VOTRE-IDENTIFIANT.r2.dev/photo-atelier.jpg"
alt="Présentation du projet pendant l’atelier"
width="640"
style="max-width: 100%; height: auto;"
>
Enregistrer avec relecture : cliquez sur Commit changes, décrivez la modification et choisissez une nouvelle branche, par exemple seance-4-image-r2. Ouvrez une pull request. Faites vérifier l’URL, le texte alternatif et l’absence de secret par une autre personne.
Contrôler l’aperçu et publier : si les aperçus Pages sont activés, ouvrez celui de la pull request. Sinon, relisez le changement avant la fusion. Fusionnez vers la branche de production : la connexion Git déclenche le déploiement Pages. Dans Cloudflare, attendez le statut de réussite puis ouvrez le site.
Prouver le résultat : vérifiez l’image sur le site et sa présence dans R2. Si elle manque, contrôlez le nom exact et sa casse, l’URL publique et le résultat du déploiement. Une simple balise image ne demande pas de réglage CORS supplémentaire pour son affichage. Consultez ensuite l’usage R2.
Et le formulaire privé ? Il suit un parcours distinct : ajoutez la liaison DATA dans le fichier Wrangler via le crayon GitHub (diapo 21), faites relire et fusionnez, puis lancez le workflow avec Actions → Run workflow (diapo 18). Les commandes sont exécutées par GitHub Actions sur son serveur, pas sur votre ordinateur. Ce parcours suppose les fichiers du Worker et son fichier de dépendances verrouillées déjà présents.
Aide : modifier un fichier dans GitHub · connexion Git de Cloudflare Pages.
Sans activation R2 : repli GitHub + Pages
Sans activation R2 et sans carte : repli GitHub + Pages, toujours sans terminal
Dans le dépôt GitHub du site, ouvrez le dossier public adapté au projet : par exemple public/images/ avec Next.js, ou images/ dans un site HTML simple.
Cliquez sur Add file → Upload files, déposez l’image de démonstration et enregistrez-la dans une branche de travail. Si le dossier n’existe pas, créez d’abord son chemin avec Add file → Create new file, par exemple public/images/.gitkeep, puis ajoutez l’image dans cette même branche.
Modifiez la page avec le crayon GitHub : utilisez src="/images/photo-atelier.jpg" pour un site à la racine du domaine. Faites relire la pull request, fusionnez et attendez le déploiement Pages.
Vérifiez l’image sur le site. Indiquez dans votre livrable « image statique publiée avec Pages ; R2 non activé ».
Ce repli publie les fichiers du projet, sans stockage objet R2 et sans sauvegarde des commentaires du formulaire. Il sert à travailler l’affichage d’une image sans activer de service facturable. Pour observer un vrai enregistrement distant, suivez la démonstration du formateur depuis son compte, sans partager ses clés.
Aide : ajouter un fichier dans GitHub.
OVH : créer le compte, les buckets et les accès
B. Avec un budget : OVH Object Storage Standard
Créez ou ouvrez votre compte OVHcloud, confirmez votre adresse et connectez-vous au Manager. Conservez l’accès dans KeePassXC.
Ouvrez Public Cloud → Créer un projet, nommez-le Formation, renseignez les informations demandées et vérifiez le moyen de paiement ainsi que les conditions avant de valider l’activation.
Dans le projet → Object Storage → créer un bucket, choisissez une région disponible et la classe Standard. Vérifiez le tarif et la réplication choisis ; ne sélectionnez pas le service Swift ni une classe d’archivage.
Créez un bucket privé de données, puis un bucket privé d’images, avec des noms uniques. Notez pour chacun le nom, la région et l’endpoint HTTPS exact affiché.
Dans la console du bucket d’images, utilisez l’ajout d’objet pour déposer une image de démonstration. Vérifiez sa taille et retrouvez-la avec votre compte administrateur. L’accès reste privé ; l’affichage public via une route de lecture contrôlée sera une extension ultérieure.
Créez un utilisateur S3 dédié à l’application, différent du propriétaire des buckets. Copiez Access Key ID et Secret Access Key dans KeePassXC. Le compte propriétaire reste réservé à l’administration.
Dans Object Storage Policy Users, importez la politique de la diapo 20 pour autoriser uniquement l’écriture des soumissions. Vérifiez réellement que lecture, suppression et écriture hors préfixe sont refusées. Ne donnez pas de droits sur le bucket d’images à cet utilisateur si le formulaire n’en a pas besoin.
Placez les identifiants dans les secrets du Worker et les paramètres dans ses variables (diapo 21). Après un envoi fictif, retrouvez le JSON privé dans OVH ; vérifiez enfin la consommation et supprimez les ressources inutiles.
Sources : création du projet OVH · utilisateurs et droits S3 · tarifs OVH.

--- SLIDE 20 ---
Parcours OVH : limiter les droits d’écriture
Utilisateur dédiéDifférent du propriétaire→
Droit PutObjectSeulement soumissions/*→
Tester les refusLecture · suppression · autre chemin
Pour OVH : autoriser seulement ce dont le formulaire a besoin.
Avec R2, passer à la liaison DATA de la diapo suivante.Afficher la politique JSON et les points de vigilance
Si vous utilisez R2 : cette politique IAM concerne uniquement OVH. Passez à la liaison R2 de la diapo suivante. Le bucket R2 de commentaires doit lui aussi rester privé.{
"Version": "2012-10-17",
"Statement": [{
"Effect": "Allow",
"Action": ["s3:PutObject"],
"Resource": ["arn:aws:s3:::NOM-DU-BUCKET/soumissions/*"]
}]
}
Remplacer NOM-DU-BUCKET ; importer comme politique de l’utilisateur S3 dédié. Le code n’a besoin ni de lister le bucket ni de lire les objets.
Chez OVH, le propriétaire conserve des droits via ses ACL : une simple absence d’autorisation dans une politique ne réduit pas nécessairement ses droits. Utiliser un utilisateur non propriétaire et vérifier réellement les refus.
PutObject permet aussi de remplacer un objet connu dans ce préfixe. Le Worker génère donc des clés imprévisibles ; ce droit ne constitue pas une garantie de stockage immuable.

--- SLIDE 21 ---
Configurer le Worker sans exposer les clés
R2 → liaison DATA
Le Worker accède au bucket sans clé S3.
OVH → secrets S3
Access Key ID + Secret Access Key restent côté serveur.
Commun aux deux parcours
Origine autorisée + clé secrète Turnstile.
ConfigurerTableau de bord + Wrangler→
DéployerGitHub / GitLab→
VérifierUn objet privé apparaîtOuvrir les réglages, la liaison R2 et les commandes de référence
Parcours R2 : une liaison au bucket privé
Dans Workers & Pages → votre Worker → Bindings → Add binding → R2 bucket, choisissez le bucket privé de données et nommez la liaison DATA. Enregistrez et déployez.
Si vous déployez avec Wrangler ou GitHub/GitLab, ajoutez aussi cette liaison dans la configuration versionnée : un réglage du tableau de bord seul ne suffit pas à décrire le prochain déploiement. Ajoutez le bloc ci-dessous aux autres réglages sans remplacer tout le fichier.
Dans le code du Worker, utilisez env.DATA.put(cle, contenu) après les contrôles. Aucune clé S3 et aucune signature manuelle ne sont nécessaires pour cette liaison interne.
Gardez ALLOWED_ORIGIN en variable et TURNSTILE_SECRET_KEY en secret. Vérifiez l’objet dans la console R2 après un test distant. En mode local, vérifiez uniquement l’écriture locale.// À fusionner dans wrangler.jsonc, en adaptant le nom réel du bucket :
"r2_buckets": [
{ "binding": "DATA", "bucket_name": "formation-s4-donnees-identifiant" }
]
// Pour un bucket créé avec juridiction UE, ajouter "jurisdiction": "eu".
// Extrait après validation, dans la fonction fetch(request, env) :
await env.DATA.put(cle, JSON.stringify(soumission), {
httpMetadata: { contentType: "application/json" }
});
// Confirmer au navigateur seulement si l’écriture réussit.
La liaison DATA donne au Worker des droits sur le bucket ; le code doit limiter les chemins et opérations. Ne fournissez aucune route publique pour lire ou lister les commentaires. Pour un déploiement refusé, vérifiez les droits précis du jeton sur les ressources ciblées, sans lui donner tous les droits du compte.
Source : utiliser R2 depuis un Worker.
Parcours OVH : clés S3 côté serveur
Dans Workers & Pages, ouvrir le Worker existant → Settings → Variables and Secrets.
TypeNomsContenu
SecretsS3_ACCESS_KEY_ID, S3_SECRET_ACCESS_KEYIdentifiants de l’utilisateur OVH
SecretTURNSTILE_SECRET_KEYClé serveur de protection du formulaire
VariablesS3_ENDPOINT, S3_REGION, S3_BUCKETValeurs exactes du bucket
VariableALLOWED_ORIGINOrigine Pages exacte, sans chemin ni barre finale
Alternative depuis le dossier du Worker :npx wrangler secret put S3_ACCESS_KEY_ID
npx wrangler secret put S3_SECRET_ACCESS_KEY
npx wrangler secret put TURNSTILE_SECRET_KEY
Les commandes demandent les valeurs à saisir. Ignorer dans Git les fichiers locaux .dev.vars et .env*, en conservant uniquement un modèle sans valeur réelle. Sources : secrets Workers.

--- SLIDE 22 ---
Définir les informations à enregistrer
Un formulaire unique pour la première version : titre, information et commentaire. Aucune donnée personnelle réelle pendant l’atelier.{
"titre": "Bibliothèque de quartier",
"information": "Ouverture le samedi matin",
"commentaire": "Prévoir un accès au clavier"
}
Le serveur ajoute id et createdAt (UTC). Il écrit un objet indépendant :soumissions/2026-11-02/UUID-GENERE-PAR-LE-SERVEUR.json
Un objet par envoi évite que deux personnes réécrivent en même temps un unique commentaires.json. Pour rechercher, relier ou modérer de nombreux commentaires, nous étudierons une base de données en séance 5.

--- SLIDE 23 ---
De la page web au stockage : la séquence
Le site est déjà chargé depuis Pages. Lire les échanges de haut en bas.
Séquence du formulaire vers le stockageLe formulaire est déjà affiché dans le navigateur depuis Pages. Le navigateur envoie les données au Worker, qui les valide et vérifie Turnstile. Le Worker enregistre dans R2 ou OVH, attend la réussite puis confirme au navigateur.Site + formulaireDans le navigateurWorkerContrôles serveurTurnstileAnti-robotR2 ou OVHStockage privé1. Envoyer les champs + jeton2. Valider les champs3. Vérifier le jeton4. Résultat du contrôle5. Si valide : écrire un JSON6. Écriture réussie7. Réponse 201 + identifiant8. Afficher « Enregistré »
Pas d’écriture réussie → pas de confirmation.Détails techniques : CORS, formats, limites et erreurs
Contrat du formulaire et contrôles serveur
POST /api/soumissions, JSON uniquement ; titre 1–120 caractères, information 1–2 000, commentaire 1–1 000, espaces retirés avant validation. Corps limité à 16 Kio en lecture réelle.
Le Worker valide les types et longueurs, génère l’identifiant et la date, puis écrit via S3 PutObject (OVH) ou env.DATA.put (R2) avec Content-Type: application/json.
Réponse 201 et identifiant uniquement si le stockage confirme l’écriture ; 400 pour contenu invalide, 413 si trop gros, 415 si mauvais format, 502 si le stockage échoue.
Prévoir OPTIONS pour le navigateur ; autoriser seulement l’origine Pages attendue et les méthodes/en-têtes utiles. CORS ne constitue pas une authentification.
Ne jamais transmettre un chemin de stockage choisi par le navigateur. Ne jamais retourner les clés ni les erreurs internes d’OVH.

--- SLIDE 24 ---
Rendre le formulaire public avec une protection
Turnstile aide à bloquer les envois automatisés de robots.
FormulaireEnvoie le jeton temporaire→
WorkerVérifie le jeton auprès de Turnstile→
R2 ou OVHLe Worker écrit si les contrôles réussissent
Clé de site
Publique, dans le formulaire.
Clé secrète
Privée, dans le Worker.
Jeton temporaire
Accompagne un seul envoi.
Le widget seul ne suffit pas. Ce contrôle ne remplace pas une connexion utilisateur.Configurer le widget et la vérification serveur
Cloudflare Turnstile, qu’est-ce que c’est ? Un service qui aide à repérer les envois automatisés et à limiter les formulaires remplis par des robots. C’est une alternative au CAPTCHA, généralement sans puzzle d’images à résoudre. Le mot anglais turnstile signifie « tourniquet » : il évoque un contrôle de passage.
Un widget est le petit composant intégré au formulaire. Il fournit un jeton temporaire, que le Worker fait vérifier par le service Siteverify avant d’autoriser l’enregistrement. Afficher le widget seul ne suffit pas.
Formulaire + widget → jeton temporaire → Worker → vérification Turnstile → écriture dans R2 ou OVH si les contrôles réussissent.
Trois éléments différents : la clé de site est publique ; la clé secrète reste dans le Worker ; le jeton temporaire accompagne un envoi. Aucun ne remplace le jeton API de déploiement ni une connexion utilisateur.
Dans Cloudflare Turnstile, créer un widget autorisant le domaine Pages de l’exercice. La clé de site est publique ; la clé secrète reste dans le Worker.
Afficher le widget dans le formulaire et envoyer le jeton éphémère reçu avec les champs. Ce jeton Turnstile est distinct du jeton API Cloudflare.
Avant toute écriture dans R2 ou OVH, le Worker appelle Siteverify côté serveur et contrôle success, le hostname attendu et l’action choisie. Refuser les jetons absents, invalides ou rejoués.
Ajouter une limitation de débit adaptée avant l’ouverture publique. Ne pas remplacer cette protection par une clé partagée placée dans le JavaScript du navigateur.
Ce contrôle anti-robot ne prouve pas l’identité d’un auteur. Un espace personnel nécessitera une authentification et des autorisations propres.

--- SLIDE 25 ---
Atelier : adapter un exemple en 35 minutes
0–5 minOuvrir le kit→
5–15 minAdapter les réglages→
15–25 minEnvoyer et vérifier→
25–35 minTester le refus
On adapte un exemple ; on ne reconstruit pas toute l’application.
Parcours court : kit R2 de la diapo suivante. Pour OVH, partir d’une version déjà configurée avec le formateur.
Blocage de plus de cinq minutes ? Passer à la démonstration ou à la simulation, puis noter le blocage pour le fil rouge.Ouvrir les consignes de l’atelier
0–5 min : ouvrir le site Pages et le bucket privé ; vérifier l’accès au Worker et les secrets avec le formateur.
5–15 min : dans une branche seance-4-formulaire, ouvrir l’exemple fourni à la diapo 26 et adapter les réglages non secrets. Relire le trajet des données avant le déploiement.
15–25 min : déployer le Worker, reporter son URL publique dans le formulaire, configurer l’origine autorisée et tester un envoi fictif.
25–35 min : retrouver le fichier JSON dans le stockage choisi (ou vérifier l’image publiée sur Pages et observer la démonstration du formateur si R2 n’est pas activé), tester les refus, faire relire la modification en binôme et ouvrir une pull request.
Le site de formation reste statique : le Worker de l’exercice est un service séparé. On ne tente pas d’ajouter une route serveur au simple export HTML.
Images : le dépôt d’image se fait séparément, depuis la console du stockage (diapo 19). Le formulaire JSON de commentaires conserve sa limite de 16 Kio ; il ne transporte pas de fichier image.

--- SLIDE 26 ---
Un exemple prêt à adapter
Télécharger le kit R2 Ouvrir le mode d’emploi ↗
Déjà fourni
Formulaire + Worker R2 + tests + workflow GitHub.
À personnaliser
Nom du Worker · bucket · origine Pages · widget Turnstile.
Dans le navigateur : ajouter les fichiers au dépôt GitHub, renseigner les secrets dans Cloudflare/GitHub, puis lancer Actions.
Code testé avec des services simulés ; votre déploiement et l’écriture réelle restent à vérifier. Aucun secret réel n’est fourni.Extension : adapter le kit avec l’IA ou préparer le parcours OVH
Choisir [R2 ou OVH]. Copier la consigne, remplacer le nom et fournir uniquement la configuration non secrète.Je reprends mon projet [nom], site statique déjà publié sur Cloudflare Pages.
Pars de l’exemple fourni et adapte la collecte : titre, information et commentaire, avec un Worker Cloudflare séparé et un bucket privé [R2 ou OVH]. Si R2 n’est pas activé, limiter mon livrable au repli image statique GitHub + Pages, sans prétendre enregistrer des commentaires ; suivre la démonstration du formateur pour le stockage distant.
Commence par lire le dépôt et propose les fichiers à modifier. Ne me demande aucune clé réelle.
Livrer :
- Un formulaire accessible (labels, clavier, erreurs textuelles, état d’attente, confirmation après stockage), avec Turnstile.
- Un Worker JavaScript de type module, avec configuration Wrangler et dépendances explicites ; pour OVH, utilise une bibliothèque compatible Workers pour signer les appels S3 SigV4, par exemple aws4fetch ; pour R2, utilise une liaison DATA versionnée dans Wrangler, sans clés S3.
- POST /api/soumissions : JSON, corps limité à 16 Kio pendant sa lecture, titre 1–120, information 1–2000, commentaire 1–1000 caractères après trim ; refuser les types inattendus.
- Vérifier Turnstile côté serveur (success, hostname, action) et prévoir une limitation de débit avant publication.
- OPTIONS et CORS limités à ALLOWED_ORIGIN ; refuser les autres origines. Ne pas présenter CORS comme une authentification.
- Le serveur génère UUID et date UTC, écrit un objet soumissions/AAAA-MM-JJ/UUID.json via un PUT S3 signé pour OVH ou env.DATA.put pour R2, sans ACL publique. Aucun fichier commun à réécrire.
- Pour R2 : liaison DATA au bucket privé, ALLOWED_ORIGIN en variable et TURNSTILE_SECRET_KEY en secret. Pour OVH : lire S3_ACCESS_KEY_ID et S3_SECRET_ACCESS_KEY uniquement dans les secrets du Worker ; S3_ENDPOINT, S3_REGION, S3_BUCKET et ALLOWED_ORIGIN en configuration.
- 201 avec identifiant seulement après succès du stockage ; 400/403/413/415/405 selon le cas, 502 en cas de panne S3 ; réponse générique sans secret.
- Pas d’API publique pour lister ou lire les soumissions. Les objets se vérifient dans la console OVH/R2, ou dans la démonstration du formateur si seul le repli Pages est possible. Les images sont ajoutées séparément dans un autre bucket ; aucun upload d’image dans ce formulaire JSON.
- README : configuration, création des secrets, déploiement, tests positifs et négatifs, suppression des données de démonstration ; .gitignore et modèles sans secrets.
Explique les étapes et fournis des fichiers complets. Vérifie la documentation actuelle ; ne prétends pas avoir testé un accès cloud indisponible. Limite-toi à ce parcours.

--- SLIDE 27 ---
Réussir l’envoi, puis prouver un refus
Envoi valide201 + identifiant→
Preuve dans R2Un objet privé retrouvé→
Test de refus400 + aucun nouvel objet
Le bouton « Tester un refus serveur » envoie volontairement un titre vide.
Ne pas se limiter au message du navigateur : vérifier le contenu du bucket avant et après.Ouvrir la recette détaillée et les résultats attendus
Ouvrir le formulaire déployé et envoyer la fiche fictive préremplie. Relever l’identifiant renvoyé après 201.
Dans R2, retrouver soumissions/date/identifiant.json et vérifier les champs. Une simple confirmation à l’écran ne suffit pas.
Noter les objets présents, puis cliquer sur Tester un refus serveur. Le bouton envoie un titre vide au Worker, même si les champs de la page sont valides.
Attendu : 400, message de refus et aucun nouvel objet après actualisation de R2. Cela vérifie le contrôle serveur, au-delà de la validation HTML.
Ouvrir le journal GitHub Actions : les tests du kit vérifient aussi le rejet des jetons absents ou invalides et les pannes de stockage, avec des services simulés.
Les tests plus complets ci-dessous peuvent être poursuivis pendant le fil rouge.
TestRésultat attendu
Envoi fictif valide201, confirmation et nouvel objet JSON privé, champs et date vérifiés dans OVH ou R2
Champ vide, type invalide ou commentaire trop long400, message compréhensible, aucun objet créé
Corps supérieur à 16 Kio / format non JSON413 / 415, aucun objet créé
Jeton Turnstile absent ou rejouéRefus, aucun objet créé
Origine étrangère / mauvaise méthodeRefus sans autorisation CORS / 405
OVH : clé S3 de test invalide ; R2 : liaison de test absente502, pas de fausse confirmation ni de détail secret ; restaurer ensuite
Deux envois successifs ou concurrentsDeux objets distincts ; aucun écrasement
Lecture anonyme de l’objet / pour OVH, lecture avec utilisateur d’écritureAccès refusé ; vérification distincte avec le compte formateur
Inspecter aussi les fichiers publiés et l’onglet Réseau : aucune clé Cloudflare ou S3. Tester l’accès au clavier et l’annonce des erreurs.

--- SLIDE 28 ---
Cinq minutes de blocage : passer au secours
Continuer à comprendre le parcours, même si l’infrastructure bloque.
Compte ou activation bloqués
Observer la collecte du formateur, sans partager ses clés.
Service indisponible
Utiliser la simulation : succès, refus et panne.
Pas d’Internet
Ouvrir la page de secours enregistrée avant le cours.
Ouvrir la simulation de secours ↗ Enregistrer pour un usage hors connexion
La simulation n’enregistre rien. Noter le résultat observé et le blocage à reprendre.Voir le diagnostic détaillé
Cloudflare refuse le déploiement : vérifier expiration, compte ciblé et permissions du jeton ; validité et autorisation sont deux contrôles différents.
Le navigateur bloque l’envoi : comparer exactement l’origine Pages et ALLOWED_ORIGIN ; vérifier OPTIONS, l’URL du Worker et les domaines Turnstile.
Signature S3 refusée : contrôler endpoint, région, clés et signature ; ne pas exposer ces valeurs dans une capture publique.
Accès S3 refusé : vérifier bucket, préfixe soumissions/, utilisateur non propriétaire, politique et ACL.
Le message est affiché mais rien n’est stocké : vérifier que le code attend le succès du stockage avant de confirmer.
La soumission existe mais ne s’affiche pas sur le site : c’est attendu ici ; le bucket reste privé et aucune lecture publique n’a été développée.
Parcours R2 : si la liaison DATA est absente, vérifier son nom et le bucket dans Wrangler. Si aucun objet distant n’apparaît avec wrangler dev, c’est normal en mode local : les écritures restent sur l’ordinateur.

--- SLIDE 29 ---
Bilan de sortie : cinq questions
À quoi sert mon jeton Cloudflare ?
Quelles ressources peut-il atteindre ?
Où les secrets doivent-ils rester ?
Pourquoi les téléchargements peuvent-ils coûter cher ?
Comment rendre mon jeton inutilisable ?
Une preuve d’envoi, une preuve de refus, puis le nettoyage.
Avant de terminer : révoquer les accès temporaires, supprimer les fichiers inutiles et vérifier la consommation.Vérifier les livrables, les réponses et le nettoyage
Repères de correction : déployer le Worker ; ressources autorisées par le jeton ; secrets dans le coffre et les services concernés, jamais dans le navigateur ; trafic et opérations s’ajoutent au stockage ; révoquer chez Cloudflare puis retirer la copie GitHub/GitLab. Effacer la copie seule ne révoque rien.
URL Pages avec formulaire et URL du Worker ; aucun secret dans les livrables.
Une soumission fictive retrouvée dans OVH ou R2 avec son identifiant et sa date ; si l’activation est impossible, une image publiée sur Pages et une observation de la démonstration d’enregistrement du formateur, sans prétendre avoir réalisé cette collecte.
README décrivant le flux, les permissions, les variables et la configuration sans valeurs secrètes.
Compte rendu des tests : succès, validation, refus d’accès, panne et absence d’écrasement.
Comparatif tarifaire daté avec région, réplication, unité, devise et frais complémentaires.
Pull request relue ; liste des points à terminer pendant le fil rouge.
Une image de démonstration retrouvée dans le stockage ; pour R2, son affichage public de test reste séparé des commentaires privés. Si l’activation est impossible, livrer l’URL de l’image statique Pages en indiquant « R2 non activé ; commentaires non collectés dans mon projet ».
En fin d’atelier : révoquer le jeton de déploiement temporaire. Décider avec le formateur si le service reste actif pour le projet ; sinon désactiver la collecte et supprimer les données fictives et ressources de démonstration inutiles.

--- SLIDE 30 ---
20 h 30–21 h 30 : projets fil rouge
5 min : confirmer l’ordre annoncé au début et l’objectif concret de chaque passage.
50 min : accompagner chaque projet pendant 50 ÷ N minutes. Les autres groupes avancent avec la checklist et préparent une question précise.
Montrer le problème avec une URL, un écran ou un test reproductible.
Choisir une seule action utile : finir le parcours UX, débloquer le déploiement, connecter le formulaire ou vérifier le stockage.
Noter la décision et la prochaine tâche dans le dépôt ; ne pas consommer le créneau suivant.
5 dernières minutes : un résultat obtenu et une prochaine action par projet.
Séance 5 : modéliser les données et les relations. Aujourd’hui, nous avons prouvé qu’un formulaire peut enregistrer des informations et des commentaires sans publier les clés.

