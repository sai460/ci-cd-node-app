# ci-cd-node-app

A simple Node.js app with a CI/CD pipeline using GitHub Actions.

## 🚀 Run Locally

### Prerequisites
- Docker installed

### Steps

# Build the Docker image
docker build -t ci-cd-node-app .

# Run the container
docker run -p -d 3000:3000 ci-cd-node-app
