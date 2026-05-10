
# MobileTask Manager

## Présentation

Ce projet a été réalisé en React Native avec Expo dans le cadre du cours de développement mobile.

L’objectif était de mettre en pratique les notions vues pendant le cours comme :
- les composants React,
- les props,
- les hooks useState et useEffect,
- la navigation entre plusieurs écrans,
- React Context,
- Redux Toolkit,
- les requêtes HTTP,
- ainsi que le style avec Flexbox.

L’application permet principalement de gérer des tâches et d’afficher des données récupérées depuis une API.

---

## Fonctionnalités

- ajout de tâches,
- suppression de tâches,
- affichage d’une liste dynamique,
- récupération des utilisateurs depuis une API,
- changement de thème avec Context API,
- gestion globale des données avec Redux.

---

## Technologies utilisées

- React Native
- Expo
- React Navigation
- Redux Toolkit
- React Redux

---

## Installation du projet

### Installer les dépendances

bash npm install 

### Lancer le projet

bash npx expo start 

Ensuite il suffit de scanner le QR Code avec Expo Go sur téléphone.

---

## Dépendances principales

bash npm install @react-navigation/native npm install @react-navigation/native-stack npm install react-redux @reduxjs/toolkit 

bash npx expo install react-native-screens react-native-safe-area-context 

---

## Structure du projet

text mobiletask-manager/ ├── App.js ├── screens/ ├── context/ ├── redux/ ├── README.md └── package.json 

---

## API utilisée

Les utilisateurs sont récupérés avec l’API :

https://jsonplaceholder.typicode.com/users

---

## Auteur

Projet réalisé dans le cadre du cours de Développement Mobile avec React Native.
