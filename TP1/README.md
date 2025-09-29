# TP1 React – Gestion des utilisateurs

Ce projet est une application React permettant de filtrer et d’afficher une liste d’utilisateurs selon plusieurs critères: 
recherche par nom, 
disponibilité, 
et âge minimum via un slider.

## Fonctionnalités

- Affichage d’une liste d’utilisateurs avec leur rôle, nom, âge et email.
- Recherche dynamique par nom.
- Filtre par disponibilité (checkbox).
- Filtre par âge minimum (slider).
- Séparation des utilisateurs par rôle.

## Structure du projet

- `src/App.jsx`: Composant principal, logique de filtrage et affichage.
- `src/data/users.js`: Données des utilisateurs.
- `src/components/forms/`: Composants de formulaire (`Input`, `Checkbox`, `InputRange`).
- `src/components/users/`: Composants d’affichage des utilisateurs (`UserRow`, `UserRoleRow`).
