# Multi-Application Docker Setup

This repository contains folders for different applications. Inside the `nodejs-app` folder, you'll find a Node.js application, and inside the `react-app` folder, there's a React.js application.

## Setup Instructions

1. **Clone this Repository:**

   Before starting, ensure you have cloned this repository to your local machine:
   ```
   git clone <repository-url>
   ```

2. **Navigate to Each Application Folder:**

   Navigate to the `nodejs-app` folder:
   ```
   cd nodejs-app
   ```

   Navigate to the `react-app` folder:
   ```
   cd react-app
   ```

3. **Create Dockerfile for Each Application:**

   In each application folder, create a Dockerfile tailored for building that specific application's Docker image.

4. **Build Docker Images:**

   After creating the Dockerfiles, build Docker images for each application using the appropriate Docker commands.

5. **Run Docker Containers:**

   Once the Docker images are built, run Docker containers for each application. Ensure that each application runs on its respective port.

6. **Create Your Branch:**

   Before making any changes, create a new branch to work in:
   ```
   git checkout -b <your-branch-name>
   ```

7. **Push to Your Branch:**

   After making changes, commit them and push to your branch:
   ```
   git add .
   git commit -m "Your commit message here"
   git push origin <your-branch-name>
   ```

## Application Dependencies

- **Node.js Application (nodejs-app):**
  - This is the web server application responsible for storing blog data.
  - The React.js application (react-app) depends on the Node.js application.
  - If the Node.js application is not running, the React.js application will not display backend content.

## Port Information

- **Node.js Application (nodejs-app):** Running on Port 4000
- **React.js Application (react-app):** Running on Port 3000

Ensure that these ports are available and accessible on your system to interact with the applications accordingly.
