# Nalo

Projet de la formation vibe coding (mairie de Paris).

App web ludique pour apprendre le vietnamien : explorer des mondes thématiques (la mer, la maison, la ville...), découvrir les objets en silhouette pour débloquer leur nom vietnamien, et faire évoluer son carpeau en dragon — en écho à la légende de Lạc Long Quân et Âu Cơ.

Site en ligne : https://lnmch-lab.github.io/NALO/

## Structure de l'app

- **Home** — le carpeau et sa progression vers le dragon, selon le nombre de mots découverts.
- **Mondes** — un planisphère de mondes thématiques, chacun avec ses objets à découvrir.
- **Cartes** — le lexique des mots débloqués, filtrable par monde.

100% statique, aucune donnée envoyée à un serveur : la collection est sauvegardée dans le navigateur (`localStorage`).

## Fichiers

- `index.html`, `style.css`, `script.js` — l'application
- `data.js` — les mondes et leurs mots (ajouter un monde = ajouter un objet ici)

## Lancer en local

Ouvrir `index.html` dans un navigateur, ou servir le dossier avec un petit serveur local.
