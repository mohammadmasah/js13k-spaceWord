# 🚀 SpaceWord - Game Project with DevOps Pipeline

Ce projet est une application web de jeu développée avec une architecture moderne, mettant l'accent sur la qualité du code, l'automatisation des tests et la conteneurisation.

## 🛠 Technologies Utilisées

* **Conteneurisation :** Docker, Docker Compose.
* **Serveur Web :** Nginx (Alpine version).
* **CI/CD :** GitHub Actions.
* **Tests :** Mocha, Chai, Cypress.

---

## 🏗 Architecture DevOps

Le projet intègre un pipeline CI/CD complet qui assure la stabilité du projet à chaque modification :
1.  **Build automatique :** Création de l'image Docker.
2.  **Tests automatisés :** Exécution des tests unitaires et fonctionnels.
3.  **Docker Hub :** Push automatique de l'image vers le registre Docker Hub.

---

## 🧪 Stratégie de Test

Nous avons implémenté deux couches de tests pour garantir une fiabilité maximale :

### 1. Tests Unitaires (Mocha & Assert)
* **Objectif :** Valider la logique mathématique et les fonctions isolées.
* **Fichiers :** `test/math.test.js`
* **Exemple :** Vérification des collisions, gestion des limites de mouvement (clamp) et calculs de trajectoire.
* **Commande :** `npm test`

### 2. Tests Fonctionnels / E2E (Cypress)
* **Objectif :** Valider le comportement de l'interface utilisateur (UI) et le flux du jeu.
* **Exemple :** Vérifier que le bouton "PLAY" lance correctement la partie et que les éléments visuels sont présents.
* **Commande :** `npm run cypress:run`

---

## 🐳 Installation et Utilisation avec Docker

L'intégralité du projet est conteneurisée. Vous n'avez pas besoin d'installer de dépendances locales, seulement Docker.

### Prérequis
* Docker installé sur votre machine.
* Docker Compose.

### Lancement du projet
1.  Clonez le dépôt.
2.  Dans le terminal, exécutez la commande suivante :
    ```bash
    docker compose up --build
    ```
3.  Accédez au jeu via votre navigateur à l'adresse :
    **`http://localhost:3000`**

### Arrêter le projet
```bash
docker compose down
