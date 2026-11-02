# Awesome Vibe Coding

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Weekly Update](https://github.com/roboco-io/awesome-vibecoding/actions/workflows/weekly-update.yml/badge.svg)](https://github.com/roboco-io/awesome-vibecoding/actions/workflows/weekly-update.yml)
[![Maintained by Pi](https://img.shields.io/badge/Maintained%20by-Pi-blueviolet)](https://pi.dev/)
[![Issues Welcome](https://img.shields.io/badge/Issues-welcome-brightgreen.svg)](../../issues/new)
[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](https://creativecommons.org/publicdomain/zero/1.0/)

*Langue : [English](README.md) | [Français](README.fr.md) | [한국어](README.ko.md) | [日本語](README.ja.md)*

Un point de départ concis et vérifié pour **créer des logiciels avec l'IA**. Les outils principaux listés ci-dessous proposaient une offre utilisable, appuyée par des preuves officielles, au **18 septembre 2026**. Les produits abandonnés, les implémentations archivées et les entrées non résolues sont exclus de cette sélection.

| Je veux… | Commencer ici |
|---|---|
| Voir ce qui a changé | [Mises à jour vérifiées récentes](#recent-updates) |
| Créer ou améliorer un logiciel | [Trouver des outils par tâche](#tools) |
| Apprendre avec un premier projet | [Commencer ici](#start-here) · [Apprendre et pratiquer](#learning) |

[Code](#code) · [Application et UI](#apps) · [Contexte et spécifications](#context) · [Tests et revue](#quality) · [Déploiement et exécution](#delivery) · [Espaces de travail et usage](#operations) · [Communauté](#community)

<a id="recent-updates"></a>
<details>
<summary><strong>Mises à jour vérifiées récentes</strong></summary>

Revues récentes et changements notables des 30 derniers jours, du plus récent au plus ancien. Une date de revue n'est **pas une date de sortie du produit**. La [revue de cycle de vie et ses preuves](docs/lifecycle-review-2026-09-18.md) détaillent ce qui a été vérifié.

<!-- recent-updates:start -->
| Vérifié le | Mise à jour | Ce qui a changé |
|---|---|---|
| 2026-10-04 | [VDLC](#resource-vdlc) | Ajout vérifié : cadre de cycle de vie qui traite l'intention et le contexte comme artefacts principaux, avec validation humaine au plan, à la revue et au déploiement. Guide trilingue. |
| 2026-09-23 | [Prbl](#resource-prbl) | Ajout vérifié : scanner de sécurité pour les failles fréquentes dans le code généré par IA. Scan et GitHub Action gratuits, correcteur payant. |
| 2026-09-20 | [Delta (Zed)](#resource-delta) | Ajout vérifié : espace de travail multijoueur pour agents de code avec revue par fils de discussion. Bêta publique, gratuit pendant la bêta. |
| 2026-09-18 | [Shep](#resource-shep) | Ajout vérifié : orchestrateur local qui exécute des agents de code en parallèle dans des worktrees Git isolés, jusqu'aux brouillons de PR. |
| 2026-09-18 | [Nettoyage du cycle de vie](docs/lifecycle-review-2026-09-18.md) | Suppression des entrées indisponibles ou fermées aux nouveaux utilisateurs, correction des produits canoniques, réduction de la liste principale de 156 à 40 outils. |
| 2026-09-18 | [Pi](#resource-pi) | Ajout vérifié : agent de code en terminal, extensible, sous licence MIT, avec modèles multi-fournisseurs et un SDK. |
| 2026-09-18 | [NextReset](docs/verified-catalog.md#resource-nextreset) | Ajout vérifié : historique public non officiel des réinitialisations et comptes à rebours locaux. Les prévisions ne sont pas cautionnées. |
| 2026-09-18 | [Superagent](#resource-superagent) | Ajout vérifié : espace de travail macOS pour agents de code, avec workflows navigateur et iOS. |
| 2026-09-18 | [Publish.my](#resource-publish-my) | Ajout vérifié : publication de sites statiques orientée agents. Activation par email requise. |
| 2026-09-18 | [Agent QA](#resource-agent-qa) | Ajout vérifié : workflows de tests web et mobile. Licence FSL-1.1-ALv2 identifiée. |
<!-- recent-updates:end -->

</details>

<a id="start-here"></a>
## Commencer ici

**Vous débutez en développement :** choisissez un petit projet, apprenez à sauvegarder vos changements avec Git et testez une fonctionnalité à la fois. Vous devez savoir ouvrir un dossier de projet et lancer les commandes de votre tutoriel. Si ces étapes sont nouvelles pour vous, suivez son chapitre d'installation.

1. Lisez un [guide de premier projet](#first-project) et choisissez un résultat que vous savez expliquer, par exemple une liste de tâches locale.
2. Choisissez un [assistant de code](#code) ou un [outil de prototypage d'application](#apps). Lisez d'abord les conditions d'accès : un client gratuit exige parfois un modèle payant, un abonnement ou une clé API.
3. Écrivez un objectif court et des critères d'acceptation. Construisez une petite étape, inspectez les changements, lancez les tests, puis créez un point de sauvegarde Git.
4. Utilisez les [outils de test et de revue](#quality) avant de partager votre travail. Gardez vos identifiants hors des prompts et des commits, et comprenez le code généré dont vous dépendez.
5. Ne déployez qu'après avoir vérifié les [contraintes d'hébergement et d'exécution](#delivery), surtout si le résultat a besoin d'un backend.

**Vous êtes déjà développeur :** allez directement à une tâche ci-dessus, puis utilisez les [workflows pratiques](#practical-guides) pour planifier, refactorer, déboguer et valider.

<a id="tools"></a>
## Trouver des outils par tâche

Cette page principale garde un petit nombre de points de départ distincts pour chaque tâche. Ce n'est ni un classement de popularité ni une liste exhaustive. [D'autres options vérifiées](docs/verified-catalog.md) restent disponibles. Chaque ressource a une page de référence unique. **CLI, IDE, Web, Desktop et MCP** décrivent la façon d'utiliser un outil, pas un niveau de qualité. Cherchez `MCP` sur cette page pour trouver les intégrations du protocole dans chaque tâche.

**Lisez les métadonnées :** chaque date de vérification renvoie aux preuves du cycle de vie. Elle confirme l'offre décrite et le périmètre d'accès à cette date. Ce n'est ni un audit de sécurité ni une promesse de disponibilité future. `Vérifier le prix` signifie que le tarif actuel n'a pas été revu en détail. Une licence open source du client ne rend pas l'inférence du modèle gratuite. Les restrictions pour nouveaux utilisateurs et les chapitres payants sont indiqués explicitement.

<a id="code"></a>
### Code et édition

Comprendre un dépôt, implémenter une fonctionnalité ou refactorer du code existant.

<!-- catalog:code -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-aider"></a>[**Aider**](https://github.com/Aider-AI/aider) · CLI | Pair programming en terminal avec des modèles cloud ou locaux et une intégration Git | Client open source. Coûts d'API ou de modèle local | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-aider) |
| <a id="resource-claude-code"></a>[**Claude Code**](https://code.claude.com/docs/en/overview) · CLI | Assistant de code agentique avec workflows en terminal et par projet | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-claude-code) |
| <a id="resource-cline"></a>[**Cline**](https://github.com/cline/cline) | Agent de code pour IDE, terminal et desktop, avec outils fichiers, commandes et navigateur | Client plus fournisseur de modèle. Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-cline) |
| <a id="resource-cursor"></a>[**Cursor**](https://www.cursor.com/) · IDE | Éditeur et agent de code pour l'implémentation, le débogage et la revue de code | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-cursor) |
| <a id="resource-gemini-cli"></a>[**Gemini CLI**](https://github.com/google-gemini/gemini-cli) · CLI | Agent de code open source en terminal avec accès par clé API, Vertex ou offre entreprise éligible. L'accès par abonnement grand public est retiré | API/Vertex ou entreprise éligible. Pas de voie grand public | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-gemini-cli) |
| <a id="resource-github-copilot"></a>[**GitHub Copilot**](https://github.com/features/copilot) | Assistance au code et workflows d'agents dans GitHub et les IDE compatibles | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-github-copilot) |
| <a id="resource-goose"></a>[**Goose**](https://github.com/aaif-goose/goose) · CLI | Agent local extensible avec workflows de code, interfaces desktop et CLI, et outils MCP | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-goose) |
| <a id="resource-kiro"></a>[**Kiro**](https://kiro.dev) · IDE | Agent de code AWS avec workflows IDE et CLI, spécifications et tests | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-kiro) |
| <a id="resource-openai-codex-cli"></a>[**OpenAI Codex CLI**](https://openai.com/codex/) · CLI | Agent de code OpenAI qui s'exécute localement dans le terminal | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-openai-codex-cli) |
| <a id="resource-pi"></a>[**Pi**](https://github.com/earendil-works/pi) · CLI | Agent de code en terminal, extensible et intégrable comme harnais | Client MIT. Conditions du modèle et du fournisseur séparées | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-pi) |
<!-- /catalog:code -->

<a id="apps"></a>
### Prototypage d'applications et d'interfaces

Créer une première application ou interface à partir d'une description ou d'un design.

<!-- catalog:apps -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-bolt-new"></a>[**Bolt.new**](https://bolt.new/) · Web | Création d'applications en langage naturel, par StackBlitz | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-bolt-new) |
| <a id="resource-dyad"></a>[**Dyad**](https://github.com/dyad-sh/dyad) · Desktop | Créer des applications en local avec des fournisseurs de modèles configurables | Vérifier le prix. Application desktop locale, coûts du fournisseur de modèle | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-dyad) |
| <a id="resource-lovable"></a>[**Lovable**](https://lovable.dev/) · Web | Génération d'applications full-stack avec Supabase | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-lovable) |
| <a id="resource-onlook"></a>[**Onlook**](https://www.onlook.com/) · Web | Modifier visuellement les interfaces d'une application tout en travaillant sur le code | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-onlook) |
| <a id="resource-replit"></a>[**Replit**](https://replit.com/) · Web | Créer et itérer sur des applications avec Replit Agent | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-replit) |
| <a id="resource-v0"></a>[**v0**](https://v0.app/) · Web | L'IA de Vercel pour générer des UI et du React | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-v0) |
<!-- /catalog:apps -->

<a id="context"></a>
### Contexte, spécifications et intégrations

Donner aux agents des exigences, des règles, de la documentation et des données de projet connectées.

<!-- catalog:context -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-caliber"></a>[**Caliber**](https://github.com/caliber-ai-org/ai-setup) | CLI qui génère et synchronise les configurations d'agents IA pour Claude Code, Cursor et Codex | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-caliber) |
| <a id="resource-context7"></a>[**Context7**](https://github.com/upstash/context7) · MCP | Récupérer la documentation des bibliothèques comme contexte de code | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-context7) |
| <a id="resource-filesystem-mcp"></a>[**Filesystem MCP**](https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem) · MCP | Donner aux agents un accès contrôlé aux fichiers du projet | Vérifier le prix. Implémentation de référence, sans garantie de production | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-filesystem-mcp) |
| <a id="resource-github-mcp"></a>[**GitHub MCP**](https://github.com/github/github-mcp-server) · MCP | Connecter les workflows de dépôts, d'issues et de pull requests | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-github-mcp) |
| <a id="resource-neon"></a>[**Neon**](https://github.com/neondatabase/mcp-server-neon) · MCP | Connecter les workflows de développement aux bases de données Neon | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-neon) |
| <a id="resource-notion-mcp"></a>[**Notion MCP**](https://developers.notion.com/guides/mcp/overview) · MCP | MCP officiel hébergé pour chercher, lire et mettre à jour du contenu Notion | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-notion-mcp) |
| <a id="resource-openspec"></a>[**OpenSpec**](https://github.com/Fission-AI/OpenSpec) | Cadre de développement piloté par les spécifications pour assistants de code IA | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-openspec) |
| <a id="resource-supabase"></a>[**Supabase MCP**](https://github.com/supabase/mcp) · MCP | MCP officiel pour les schémas, requêtes et configurations de projet Supabase | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-supabase) |
<!-- /catalog:context -->

<a id="quality"></a>
### Tests, revue et sécurité

Vérifier le comportement, relire les changements générés et diagnostiquer les échecs.

<!-- catalog:quality -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-agent-qa"></a>[**Agent QA**](https://github.com/vostride/agent-qa) · MCP | Écrire et exécuter des tests web et mobile en langage naturel | FSL-1.1-ALv2. Source disponible avec restriction d'usage concurrent. Coûts de modèle | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-agent-qa) |
| <a id="resource-playwright-mcp-official"></a>[**Playwright MCP (Microsoft)**](https://github.com/microsoft/playwright-mcp) · MCP | Automatisation officielle du navigateur par instantanés structurés des pages | Client Apache-2.0. Conditions du modèle séparées | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-playwright-mcp-official) |
| <a id="resource-pr-agent"></a>[**PR-Agent**](https://github.com/The-PR-Agent/pr-agent) | Relecteur de pull requests maintenu par la communauté, distinct de Qodo | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-pr-agent) |
| <a id="resource-prbl"></a>[**Prbl**](https://getprbl.com) · Web | Scanner une application en ligne ou un dépôt pour trouver les failles fréquentes du code généré par IA. La GitHub Action commente les PR. Le correcteur Pro applique des corrections vérifiées | Scan et GitHub Action gratuits. Offres payantes pour le correcteur et les dépôts privés. Python/JS/TS uniquement | 2026-09-23 |
| <a id="resource-qodo"></a>[**Qodo**](https://www.qodo.ai) | Moteur de revue de code par IA (anciennement CodiumAI) | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-qodo) |
| <a id="resource-semgrep"></a>[**Semgrep MCP**](https://github.com/semgrep/semgrep/tree/develop/cli/src/semgrep/mcp) · MCP | Analyse de sécurité MCP via le CLI Semgrep maintenu | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-semgrep) |
| <a id="resource-sentry"></a>[**Sentry**](https://github.com/getsentry/sentry-mcp) · MCP | Inspecter les erreurs d'application et diagnostiquer les échecs | Functional Source License. Source disponible. Vérifier les conditions de l'offre hébergée | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-sentry) |
<!-- /catalog:quality -->

<a id="delivery"></a>
### Déploiement et exécution

Construire, publier ou exécuter du code dans un environnement adapté.

<!-- catalog:delivery -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-cloudflare"></a>[**Cloudflare**](https://github.com/cloudflare/mcp-server-cloudflare) · MCP | Gérer le déploiement d'applications et les ressources cloud | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-cloudflare) |
| <a id="resource-e2b"></a>[**E2B**](https://github.com/e2b-dev/E2B) | Sandbox cloud sécurisée pour agents IA de niveau entreprise | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-e2b) |
| <a id="resource-publish-my"></a>[**Publish.my**](https://publish.my/) · Web | Publication de sites statiques pilotée par agents, avec activation par email | Offre gratuite. Sites statiques uniquement. Activation par email | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-publish-my) |
| <a id="resource-xcode-build-mcp"></a>[**XcodeBuildMCP**](https://github.com/getsentry/XcodeBuildMCP) · MCP | Outils CLI et MCP pour compiler, exécuter et déboguer des projets Apple | Vérifier le prix | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-xcode-build-mcp) |
<!-- /catalog:delivery -->

<a id="operations"></a>
### Espaces de travail et usage des agents

Organiser les sessions, inspecter les exécutions et comprendre l'usage ou la disponibilité.

<!-- catalog:operations -->
| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-delta"></a>[**Delta (Zed)**](https://delta.dev/) · Desktop | Lancer des fils d'agents et relire leurs changements dans un espace de travail multijoueur qui relie conversation et historique du code. Compatible avec les dépôts Git existants | Gratuit pendant la bêta publique. Offres payantes prévues. Coûts de modèle séparés | 2026-09-20 |
| <a id="resource-duckweed"></a>[**Duckweed**](https://github.com/MusicMaster4/Duckweed) · Desktop | Exécuter agents de code, shells, diffs Git et sessions dans un espace de travail local multiplateforme | Source disponible. Voir la licence. Coûts de modèle et de fournisseur séparés | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-duckweed) |
| <a id="resource-llm-log"></a>[**llm.log**](https://github.com/lanesket/llm.log) | Inspecter les coûts, tokens et traces de requêtes des modèles via un proxy local | MIT. Coûts de modèle et de fournisseur séparés | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-llm-log) |
| <a id="resource-parallel-code"></a>[**Parallel Code**](https://github.com/johannesjo/parallel-code) · Desktop | Exécuter des agents de code dans des worktrees Git isolés et relire leurs changements | MIT. Coûts de modèle et de fournisseur séparés | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-parallel-code) |
| <a id="resource-shep"></a>[**Shep**](https://github.com/shep-ai/shep) · CLI | Orchestrer des agents de code en parallèle dans des worktrees Git isolés, jusqu'au commit, au push, au suivi CI et aux brouillons de PR | Client MIT. Abonnement d'agent ou coûts d'API séparés | 2026-09-18 |
| <a id="resource-superagent"></a>[**Superagent**](https://github.com/pungme/superagent-desktop) · Desktop | Utiliser Claude Code ou Codex dans un espace de travail macOS avec outils navigateur et iOS | MIT. macOS Apple Silicon. Abonnement au modèle séparé | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-superagent) |
| <a id="resource-usage"></a>[**usage**](https://github.com/aqua5230/usage) · Desktop | Voir les quotas des agents de code depuis la barre de menu macOS ou la zone de notification Windows | AGPL-3.0. Coûts de modèle et de fournisseur séparés | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-usage) |
| <a id="resource-warp"></a>[**Warp Terminal**](https://www.warp.dev/terminal) | Utiliser un terminal orienté agents et inspecter les workflows de code | Téléchargement du terminal. Vérifier le prix de l'usage IA | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-warp) |
<!-- /catalog:operations -->

<a id="learning"></a>
## Apprendre et pratiquer

Choisissez selon votre objectif. Les étiquettes Guide et Paper décrivent le format. Un contenu conceptuel daté reste parfois utile, mais ses exemples d'outils anciens et ses classements de benchmarks ne sont pas des conseils produits actuels. Vérifiez la langue, les prérequis et les sections payantes avant de commencer. Les vidéos historiques et les lectures complémentaires sont dans le catalogue étendu.

<a id="first-project"></a>
### Premier projet

Suivez une séquence complète, de l'installation au résultat. Respectez les prérequis du support choisi et terminez une petite application fonctionnelle avant de collectionner d'autres outils.

| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-ai-book-ai-coding"></a>[**AI Book: AI Coding**](https://aibook.ren/categories/ai-coding) · Guide | Manuel en chinois sur les workflows d'agents de code, le choix des outils et les pratiques avec Cursor, Codex, Claude Code et Kiro | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-ai-book-ai-coding) |
| <a id="resource-vibe-coding-manual-roboco"></a>[**Vibe Coding Manual (Roboco)**](https://roboco.io/posts/vibe-coding-manual/) · Guide | Workflow en coréen et modèles de règles de projet. Exemples datés | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-vibe-coding-manual-roboco) |
| <a id="resource-vibe-coding-with-confidence-mahmoud-zalt"></a>[**Vibe Coding with Confidence (Mahmoud Zalt)**](https://zalt.me/guides/vibe-coding) · Guide | Manuel de développement avec chapitres d'introduction accessibles et contenu avancé payant | Chapitres de base gratuits. Chapitres avancés payants. EN | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-vibe-coding-with-confidence-mahmoud-zalt) |

<a id="practical-guides"></a>
### Workflows pratiques

Utilisez-les quand un projet existe déjà et que vous devez résoudre un problème précis.

| Tâche | Séquence de travail |
|---|---|
| Nouvelle fonctionnalité | Objectif et critères d'acceptation → inspecter le contexte → petite implémentation → revue et tests |
| Refactoring | Capturer le comportement actuel → identifier un petit changement → comparer le comportement → répéter |
| Correction de bug | Reproduire → formuler une hypothèse → ajouter un test de régression → corriger et vérifier |
| Tests | Identifier les comportements critiques → choisir des vérifications utiles → exécuter et analyser les échecs |

[Les workflows complets et modèles de prompts](docs/workflows-and-templates.md) incluent la préparation des sessions et des playbooks réutilisables. Gardez les exigences et les décisions dans les documents du projet, utilisez des sandboxes quand c'est pertinent et relisez les changements sensibles pour la sécurité avant de déployer.

| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-agentic-coding-armin-ronacher"></a>[**Agentic Coding Recommendations (Armin Ronacher)**](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) · Guide | Workflows d'agents pratiques et conseils de tests. Point de vue d'un praticien, 2025 | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-agentic-coding-armin-ronacher) |
| <a id="resource-here-s-how-i-use-llms-to-help-me-write-code-simon-willison"></a>[**Here's how I use LLMs to help me write code (Simon Willison)**](https://simonwillison.net/2025/Mar/11/using-llms-for-code/) · Guide | Pratiques itératives de code et de QA. Les exemples d'outils de 2025 sont historiques | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-here-s-how-i-use-llms-to-help-me-write-code-simon-willison) |
| <a id="resource-secure-vibe-coding-guide-csa"></a>[**Secure Vibe Coding Guide (CSA)**](https://cloudsecurityalliance.org/blog/2025/04/09/secure-vibe-coding-guide) · Guide | Checklist de sécurité sur les secrets, les autorisations, la validation et la revue | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-secure-vibe-coding-guide-csa) |

<a id="concepts-research"></a>
### Concepts et recherche

Comprendre les outils après avoir essayé un petit projet, ou approfondir l'évaluation et les pratiques de développement.

Le [vibe coding](https://en.wikipedia.org/wiki/Vibe_coding) consiste à guider la génération de logiciels par IA avec une intention exprimée en langage naturel. Le [Model Context Protocol](https://modelcontextprotocol.io/) connecte les agents aux outils et aux données. Un agent de code, son modèle sous-jacent et ses intégrations sont des choix distincts : changer l'un ne change pas automatiquement les autres.

| Ressource | Quand l'utiliser | Accès / périmètre | Vérifié |
|---|---|---|---|
| <a id="resource-context-engineering-intro-coleam00"></a>[**Context Engineering Intro (coleam00)**](https://github.com/coleam00/context-engineering-intro) · Guide | Exemples de contexte de projet et d'instructions pour agents de code | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-context-engineering-intro-coleam00) |
| <a id="resource-the-model-context-protocol-guide-anthropic"></a>[**Documentation du Model Context Protocol**](https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro) · Guide | Introduction officielle actuelle à l'architecture et aux intégrations MCP | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-the-model-context-protocol-guide-anthropic) |
| <a id="resource-swe-agent-agent-computer-interfaces-enable-automated-software-engineering"></a>[**SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering**](https://arxiv.org/abs/2405.15793) · Paper | Agent autonome qui corrige de vrais bugs avec une Agent-Computer Interface | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-swe-agent-agent-computer-interfaces-enable-automated-software-engineering) |
| <a id="resource-swe-bench-can-language-models-resolve-real-world-github-issues"></a>[**SWE-bench: Can Language Models Resolve Real-World GitHub Issues?**](https://arxiv.org/abs/2310.06770) · Paper | Benchmark de référence pour évaluer les agents de code IA | Lecture gratuite. Vérifier les conditions de réutilisation | [2026-09-18](docs/lifecycle-review-2026-09-18.md#resource-swe-bench-can-language-models-resolve-real-world-github-issues) |
| <a id="resource-vdlc"></a>[**VDLC — Vibe-Driven Development Lifecycle (Roboco)**](https://vdlc.roboco.io/) · Guide | Cadre de cycle de vie qui traite l'intention et le contexte comme artefacts principaux. Six étapes avec validation humaine à l'approbation du plan, à la revue finale et au déploiement. Trilingue EN/KO/JA | Lecture gratuite. Vérifier les conditions de réutilisation | 2026-10-04 |

<details>
<summary>Contexte et origine</summary>

> « Fully give in to the vibes, embrace exponentials, and forget that the code even exists. »
> — Andrej Karpathy, février 2025

![Vibe Coding Meme](images/vibecoding-meme.png)

Pour l'apprentissage comme pour la production, associez les instructions en langage naturel à la compréhension, à la revue, aux tests et à une responsabilité claire sur le résultat.

</details>

<a id="community"></a>
## Plus d'options et support

- [Ressources vérifiées supplémentaires](docs/verified-catalog.md) : alternatives actuelles et supports d'apprentissage datés au-delà de la sélection principale.
- [Preuves du cycle de vie et décisions de revue](docs/lifecycle-review-2026-09-18.md) : sources, limites de périmètre et noms canoniques actuels.
- [Entrées supprimées, remplacées et non vérifiées](docs/catalog-history.md) : historique et raisons, pas des recommandations actuelles.
- Pour le support d'un produit, utilisez la documentation officielle liée dans la fiche de preuves de chaque ressource. [Ouvrez une issue sur le dépôt](../../issues/new) pour signaler un changement de statut ou une correction.

<a id="contributing"></a>
<a id="contribution-guidelines"></a>
## Contribuer

[Proposez une ressource via une issue](../../issues/new). Chaque ajout doit démontrer **une pertinence directe, des preuves publiques utilisables, une valeur distincte, un accès et des affirmations transparents, et une maintenance ou une complétude substantielle**. Les produits payants et les auto-soumissions suivent les mêmes règles. Déclarez vos affiliations et les limites importantes. Les étoiles GitHub ne garantissent pas l'admission.

Lisez la [politique de curation](docs/curation-policy.md) et le [guide de contribution](.github/CONTRIBUTING.md). Les échecs manifestes sont rejetés avec leurs raisons. Les cas incertains restent ouverts pour revue. Les changements acceptés sont synchronisés en anglais, français, coréen et japonais, et les issues ne sont fermées qu'après publication réussie.

Les workflows hebdomadaires et de traitement des issues utilisent [Pi](https://pi.dev/) avec Kimi ou Qwen et [Exa Search](https://exa.ai/). [Automatisation et configuration](docs/automation.md) explique l'implémentation et les contrôles du mainteneur.

<a id="license"></a>
## Licence

Ce travail est placé dans le domaine public sous [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/). Les projets et supports d'apprentissage liés conservent leurs propres licences et conditions d'accès.
