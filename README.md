

# MobileTask Manager - Projet React Native

## Présentation

MobileTask Manager est une application mobile réalisée avec React Native et Expo.
Le projet couvre les notions importantes vues en cours :

- JSX
- Composants React
- Props
- useState
- useEffect
- Navigation entre écrans
- React Context
- Requêtes HTTP avec fetch
- Redux Toolkit
- Styles et Flexbox

L'application permet :
- d'ajouter des tâches,
- de consulter une liste de tâches,
- de récupérer des utilisateurs depuis une API,
- de gérer un thème global avec Context,
- de gérer les tâches avec Redux.

---

## Technologies utilisées

- React Native
- Expo
- React Navigation
- Redux Toolkit
- React Redux

---

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Bodo-am/ProjetReactNative_AKA.git
cd ProjetReactNative_AKA
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Lancer le projet

```bash
npx expo start
```

Scanner ensuite le QR Code avec Expo Go.

---

## Dépendances à installer

```bash
npm install @react-navigation/native
npm install @react-navigation/native-stack
npm install react-redux @reduxjs/toolkit

npx expo install react-native-screens react-native-safe-area-context
```

---

## Structure du projet

```text
mobiletask-manager/
├── App.js
├── screens/
├── components/
├── context/
├── redux/
└── package.json
```

---

## Fonctionnalités principales

### Accueil
Écran principal avec navigation vers les autres pages.

### Gestion des tâches
- ajout d'une tâche,
- affichage dynamique,
- suppression.

### API Utilisateurs
Récupération de données depuis :
https://jsonplaceholder.typicode.com/users

### Thème global
Utilisation de React Context pour changer le thème.

### Redux
Gestion centralisée des tâches.

---

## Auteur

Projet académique réalisé dans le cadre du cours de Développement Mobile avec React Native.
