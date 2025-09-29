# Projet React avec Vite et ESLint

Ce projet est une base React créée avec Vite. Il inclut ESLint pour garantir la qualité et la mise en forme du code.

---

## Création du projet React avec Vite

- Se placer dans le dossier de travail

```bash
# Créer un nouveau projet React avec Vite
npx create-vite@latest tp1
# ou
npm create vite@latest ./
```
- Installer les dépendances

```bash
npm install
# Lancer le serveur de développement
npm run dev
```

- Installation et configuration d'ESLint
```bash
npm install eslint --save-dev
# Initialiser ESLint avec la commande interactive :
npx eslint --init
```
- Dans la section "scripts", ajouter :
```bash
"lint": "eslint src --ext .js,.jsx"
```

- Cela permet d'exécuter ESLint facilement :
```bash
npm run lint
# Pour corriger automatiquement les erreurs simples :
npm run lint -- --fix
```

- Installation PropTypes
```bash
npm install prop-types
```