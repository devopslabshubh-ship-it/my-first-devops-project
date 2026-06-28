# My First DevOps Project 🚀

Welcome to my first hands-on DevOps project! In this project, I have built a clean, structured, and automated workflow for a containerized application.

## 🏗️ Project Architecture
* **Frontend/Backend:** Node.js Application (`node-custom-app/`)
* **Reverse Proxy:** Nginx integration for secure routing
* **Containerization:** Docker & Docker Compose
* **Automation:** Automated CI/CD via GitHub Actions

## 📂 Repository Structure
* `.github/workflows/`: Contains the automated CI pipeline configuration.
* `node-custom-app/`: Core application source code and its production Dockerfile.
* `docs/`: Comprehensive handbooks and guides covering Docker, Nginx, and Git conflicts.

## ⚙️ CI/CD Pipeline
Every time code is pushed to the `main` branch, a GitHub Actions runner automatically:
1. Validates the Dockerfile structure.
2. Builds the Node.js application container.
3. Verifies the Docker Compose setup.
