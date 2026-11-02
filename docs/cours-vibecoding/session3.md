# VIBE-CODING - Séance 3

Source : https://formations.mehdiguiraud.com/cours/SCAP/VIBE-CODING/session3.html

--- SLIDE 1 ---
VIBE-CODING
Séance 3 : Maquettes, UX et inventaire des outils
Écrans, accessibilité et comparaison critique des ressources
Durée : 3 h · Application web & mobile avec IA

--- SLIDE 2 ---
QCM — Rappel de la session 2
Huit questions, une seule réponse par question. Le bilan sera présenté à la fin.
Votre nom
Votre groupe
LundiJeudi
Votre nom et vos choix sont enregistrés en ligne pour cette séance, puis supprimés après 30 jours. Le bilan collectif affiche uniquement les effectifs, sans les noms.
Commencer le QCM
Passer le questionnaire → diapo 11

--- SLIDE 3 ---
Question 1 / 8Quelle différence faites-vous entre Git et GitHub ?A. Ce sont des outils pour travailler sur du code.B. Git conserve l’historique des fichiers ; GitHub héberge des dépôts Git et facilite la collaboration.C. Git est le site web ; GitHub est le logiciel qui garde les versions sur votre ordinateur.D. Git est la machine à remonter le temps ; GitHub est le salon où l’on montre ses voyages.
Question suivante

--- SLIDE 4 ---
Question 2 / 8Que contient un dépôt ? À quoi sert son README ?A. Le dépôt est le carton du projet ; le README est l’étiquette qui évite de demander : « C’est quoi, ce bazar ? ».B. Le dépôt est votre compte personnel ; le README est la liste des mots de passe du projet.C. Le dépôt contient les fichiers et leur historique ; le README présente le projet, son public, son besoin et son état.D. Le dépôt contient des documents ; le README donne des informations.
Question suivante

--- SLIDE 5 ---
Question 3 / 8Vous modifiez le README : qu’enregistre un commit et que doit expliquer son message ?A. Le commit publie automatiquement le site ; son message indique son adresse web.B. Le commit sauvegarde le travail, avec un message.C. C’est une photo souvenir du projet, avec une légende plus utile que « truc final FINAL 2 ».D. Le commit enregistre la modification dans l’historique ; son message décrit ce qui change, par exemple « Précise le public du projet ».
Question suivante

--- SLIDE 6 ---
Question 4 / 8Pour ajouter une page sans modifier directement la version principale, dans quel ordre utilisez-vous une issue, une branche et une pull request ?A. Issue pour décrire la tâche → branche → modifications et commit → pull request → relecture et fusion.B. On écrit la mission, on prend une voie de garage et on demande le feu vert avant de rejoindre la voie principale.C. On prépare le changement, puis on le partage avec le groupe.D. On fusionne d’abord la pull request, puis on crée une branche ; l’issue enregistre la version des fichiers.
Question suivante

--- SLIDE 7 ---
Question 5 / 8Que signifie MVP ? Quels sont les quatre éléments de sa formule ?A. Un Maximum de Versions Possibles : toutes les fonctionnalités prévues, livrées d’un coup.B. Minimum Viable Product : une cible + un problème + une action centrale + un résultat observable.C. Le plus petit vélo qui roule : pas besoin de klaxon connecté pour vérifier qu’on avance.D. Une petite première version du produit.
Question suivante

--- SLIDE 8 ---
Question 6 / 8Une belle page dont les boutons ne font rien est-elle un MVP ? Pourquoi ?A. Non, il manque quelque chose.B. C’est une vitrine de boulangerie sans pain : jolie, mais on ne peut pas encore tester le sandwich.C. Non : une personne doit pouvoir accomplir l’action centrale et obtenir un résultat permettant de tester l’usage.D. Oui : une belle maquette suffit à prouver que le produit fonctionne.
Question suivante

--- SLIDE 9 ---
Question 7 / 8Pour préparer un podcast, quelle action centrale et quel résultat observable choisiriez-vous ? Quelle fonction reporter ?A. Une fiche qu’on retrouve avant que le micro s’allume ; le robot qui fait le café aux invités attendra.B. Aider à préparer les podcasts, puis améliorer l’outil.C. Construire d’abord le paiement et les profils ; compter les couleurs de la page pour vérifier l’utilité de la fiche.D. Créer et retrouver une fiche d’entretien ; vérifier qu’elle sert à préparer un échange ; reporter la transcription automatique.
Question suivante

--- SLIDE 10 ---
Question 8 / 8Peut-on déposer un mot de passe, une clé API ou des données personnelles dans un dépôt privé ?A. Non : la consigne de la session 2 exclut ces informations des dépôts publics comme privés.B. Oui : « privé » signifie que les secrets ne peuvent jamais être exposés.C. Il faut faire attention à ce qu’on met dans le dépôt.D. Un dépôt privé n’est pas un coffre-fort magique : on n’y colle pas les clés sous le paillasson.
Voir le bilan

--- SLIDE 11 ---
Bilan du QCM
Actualiser les statistiques
Autre répondant sur cet appareil
Continuer la séance

--- SLIDE 12 ---
Planning de la séance
18h30 – 18h40 : Questionnaire de rappel de la session 2 et correction (10 min)
18h40 – 19h35 : Maquettes, parcours et accessibilité du MVP (55 min)
19h35 – 19h50 : Pause
19h50 – 20h10 : Étape 1 : lire la capture avec l'IA
20h10 – 20h30 : Étape 2 : lire le dépôt awesome
20h30 – 20h50 : Étape 3 : comparer les sources
20h50 – 21h10 : Étape 4 : vérifier trois outils en binôme
21h10 – 21h30 : Étape 5 : publier outils.html

--- SLIDE 13 ---
Objectifs de la séance
Cartographier les écrans du MVP
Rédiger des wireframes textuels actionnables
Prévoir états vides, chargement, erreurs, confirmations
Appliquer une checklist d'accessibilité minimale
Comparer deux sources et vérifier les conditions de trois outils
Publier outils.html via une branche, une pull request et Cloudflare Pages
Fil rouge : chaque séance alimente le même projet MVP, versionné dès la séance 1.

--- SLIDE 14 ---
Sobriété volontaire
Interface claire, responsive, sans décor inutile.
Chaque écran : une intention principale.
Les états (vide, erreur, succès) font partie du produit.
Accessibilité : contraste, clavier, libellés, cibles tactiles.

--- SLIDE 15 ---
Prompt séance 3 — UX/UI
Copiez le prompt dans votre assistant IA. Remplacez les éléments entre crochets.
Agis comme un UX/UI designer et un développeur front-end.
À partir de cette idée : [description], conçois l'expérience utilisateur du MVP.
Produis :
1. La carte des écrans ou pages nécessaires.
2. Les wireframes textuels de chaque écran, avec la hiérarchie des contenus et les actions principales.
3. Le parcours d'un nouvel utilisateur depuis l'arrivée jusqu'à la première action réussie.
4. Les états vides, états de chargement, erreurs et confirmations à prévoir.
5. Une mini-charte : palette accessible, typographies système, espacements, boutons et composants réutilisables.
6. Une checklist d'accessibilité : contraste, navigation clavier, libellés, messages d'erreur, lecteur d'écran, taille des cibles tactiles.
7. Des critères d'acceptation UX pour chaque écran.
Reste volontairement sobre : propose une interface claire, responsive, sans éléments décoratifs inutiles. Décris les maquettes avec suffisamment de précision pour pouvoir les coder.

--- SLIDE 16 ---
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

--- SLIDE 17 ---
Atelier pratique
Générer la carte d'écrans avec le prompt.
Valider le parcours « première action réussie ».
Annoter 3 écrans prioritaires avec critères UX.
Déposer les wireframes textuels dans /docs/ux.md.

--- SLIDE 18 ---
Objectif
Exercice : faire l’inventaire des outils de vibe-coding
Prérequis : dépôt GitHub connecté à Cloudflare Pages ; voir les annexes Git et Cloudflare.
Créer la page outils.html dans votre dépôt GitHub. Elle sera publiée automatiquement par Cloudflare Pages. Pour la remplir, vous fusionnez deux sources de nature différente :
Source A : une capture d'écran d'un post X/Twitter (Himanshu Hingorani, 9 oct. 2026) intitulé « 25 vibe coding resources ». Fichier : docs/Vibe-coding/Vibe-coding.png.
Source B : le dépôt GitHub awesome-vibecoding. C'est une liste « awesome », vérifiée et datée, avec une version en français (README.fr.md).
Ouvrir ou télécharger la capture du post X

--- SLIDE 19 ---
Étape 1 – Lire l'image avec l'IA (20 min)
Donnez la capture à votre assistant IA avec ce prompt :
Lis cette capture d'écran et extrais chaque ressource dans un tableau Markdown avec les colonnes : n°, nom, URL, description en français, catégorie (inspiration / composants UI / animation / design system / prompts).
Contrôle : il doit y avoir 25 lignes. Comparez avec l'image. L'IA a-t-elle oublié, inventé ou déformé une URL ?

--- SLIDE 20 ---
Étape 2 – Lire le dépôt awesome (20 min)Lis le README de https://github.com/Scap-Mehdi/awesome-vibecoding et liste les outils par tâche (Code, App & UI, Context & specs, Test & review, Deploy & run…) avec la colonne « Access / scope » et la date de vérification.
Repérez les changements de politique qui y sont signalés : accès retirés, outils arrêtés, passage au payant, bêtas gratuites, licences. Par exemple, la liste précise que l'accès à Gemini CLI par abonnement grand public a été retiré. Elle indique aussi qu'elle est passée de 156 à 40 outils après avoir écarté les produits arrêtés ou fermés aux nouveaux utilisateurs.
Les chiffres et politiques cités sont ceux du document de l’exercice. Vérifiez le README actuel et datez vos constats : ils peuvent évoluer.

--- SLIDE 21 ---
Étape 3 – Comparer et garder un regard critique (20 min)
QuestionSource A (post X)Source B (awesome)
Qui écrit, dans quel but ?
Les informations sont-elles datées et sourcées ?
Le prix et les conditions d'accès sont-ils indiqués ?
Y a-t-il des liens d'intérêt ? (indice : la ressource n° 1 et la réponse de l'auteur sous son propre post)
Quels types d'outils couvre la liste ? (design/UI ou outils de code)
Observation attendue : les deux listes se complètent. Le post rassemble surtout des ressources de design et d'interface (inspiration, composants, animation). Le dépôt awesome rassemble surtout des outils pour coder, tester et déployer.

--- SLIDE 22 ---
Étape 4 – Vérifier la politique de 3 outils (20 min, en binôme)
Chaque binôme choisit 3 outils, au moins un dans chaque source. Sur la page officielle de chaque outil, il relève :
gratuit, freemium ou payant, et les quotas ;
si un compte, une carte bancaire ou une clé API est nécessaire ;
la licence (open source ou non) et les droits sur ce que l'outil produit ;
l'utilisation de vos données ou de votre code pour l'entraînement des modèles ;
la date à laquelle vous avez vérifié, et le lien de la source.

--- SLIDE 23 ---
Étape 5 – Publier (20 min)
Créer une branche outils.
Demander à l'IA de générer outils.html à partir du tableau, avec un filtre par catégorie.
Faire un commit et un push, puis vérifier l'URL d'aperçu Cloudflare.
Ouvrir une pull request, la faire relire par l'autre binôme, puis la fusionner. La version en production se met à jour.

--- SLIDE 24 ---
Les 25 ressources du post (corrigé de l'étape 1)
N°RessourceURLCatégorie
1Scrolltidescrolltide.coPrompts + code (sites 3D / scroll)
2Minimal Galleryminimal.galleryInspiration
3Godlygodly.websiteInspiration
4Refero Stylesstyles.refero.designDesign system / typographie
5Component Gallerycomponent.galleryDesign system
6Mobbinmobbin.comInspiration (parcours d'apps)
7DESIGNmddesignmd.aiDesign system en Markdown pour agents
8VibePromptvibeprompts.devPrompts
921st.dev21st.devComposants UI (MCP)
10Kineticskinetics.colorion.coAnimation
11shadcn/uiui.shadcn.comComposants UI
12Aceternity UIui.aceternity.comComposants UI animés
13Magic UImagicui.designComposants UI
14Motion Primitivesmotion-primitives.comAnimation
15Uiverseuiverse.ioComposants UI (communauté)
16Shadcnblocksshadcnblocks.comBlocs UI
17mapcnmapcn.devComposants de carte
18Awwwardsawwwards.comInspiration
19Liquid Glassglass.samasante.comEffets UI
20CSS Text Effectstext-effects.colorion.coAnimation texte
21Circle Loaderscircleloaders.dominikakissi.comAnimation
22Gradient Buttonsgradientbuttons.colorion.coEffets UI
23Shadertoyshadertoy.comShaders
243Dicons3dicons.coIcônes 3D
25Anime.jsanimejs.comBibliothèque d'animation JS

--- SLIDE 25 ---
Livrables attendus
docs/ux.md (carte, wireframes, checklist a11y)
Critères d'acceptation UX par écran
Tableaux des deux sources et comparaison critique
Fiches de vérification de trois outils, datées et sourcées
outils.html avec filtre par catégorie, URL de production et pull request relue
Pour la suite : Séance 4 — Cloudflare, formulaires et stockage R2 ou OVH.

--- SLIDE 26 ---
Récapitulatif
Séance 3 — Maquettes, UX et inventaire des outils
Cartographier les écrans du MVP
Rédiger des wireframes textuels actionnables
Prévoir états vides, chargement, erreurs, confirmations
Appliquer une checklist d'accessibilité minimale
Comparer deux sources et vérifier les conditions de trois outils
Publier outils.html via une branche, une pull request et Cloudflare Pages
Conservez toutes les productions dans le dépôt Git dès maintenant.

