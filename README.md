# 📚 Book Management API - Docker Security & Optimization

> **Docker Image Optimization • Container Security • Runtime Security •
> DevSecOps Best Practices**

A simple **Node.js + Express + EJS** Book Management application built
to demonstrate **Docker image optimization, container security
hardening, and runtime security best practices**.

This project showcases how to transform a basic Docker image into a
lightweight, secure, and production-ready container by applying
enterprise Docker best practices.

------------------------------------------------------------------------

# 🚀 Technologies Used

-   Node.js
-   Express.js
-   EJS
-   Docker
-   Docker Scout / Trivy
-   Alpine Linux
-   Git & GitHub

------------------------------------------------------------------------

# 📁 Project Structure

``` text
book-management-api/
├── src/
│   ├── data/
│   ├── public/
│   ├── routes/
│   └── views/
├── Dockerfile
├── Dockerfile.optimized
├── .dockerignore
├── package.json
├── server.js
├── README.md
└── screenshots/
```

------------------------------------------------------------------------

# 🏗️ Architecture

``` text
              User
               │
               ▼
      Browser (localhost:3000)
               │
               ▼
     Docker Container (Node.js)
               │
               ▼
      Express + EJS Application
               │
               ▼
          books.json
```

------------------------------------------------------------------------

# ✨ Features

-   Book Management Web Application
-   Search Books
-   Responsive User Interface
-   Dockerized Application
-   Multi-stage Docker Build
-   Non-root Container
-   Runtime Security
-   Vulnerability Scanning using Trivy

------------------------------------------------------------------------

# 📊 Before vs After Comparison

  Feature                    Before         After
  -------------------------- -------------- ----------------
  Base Image                 node:22        node:22-alpine
  Build Type                 Single Stage   Multi Stage
  Image Size                 **1.65 GB**    **246 MB**
  Root User                  Yes            No
  `.dockerignore`            No             Yes
  Critical Vulnerabilities   **45**         **0**
  High Vulnerabilities       **360**        **2**
  Read-only Filesystem       No             Yes
  CPU Limit                  No             Yes
  Memory Limit               No             Yes
  Linux Capabilities         Default        Dropped

------------------------------------------------------------------------

# Part 1 -- Image Optimization

## Before

-   node:22 base image
-   Single-stage build
-   No `.dockerignore`
-   Large image size

## After

-   Multi-stage Docker build
-   node:22-alpine
-   Production dependencies only (`npm ci --omit=dev`)
-   `.dockerignore`
-   Approximately **85% image size reduction**

### Image Size

         Before        After
  ------------- ------------
    **1.65 GB**   **246 MB**

### Screenshots

Replace with your screenshots:

-   `screenshots/Part1-Image-Optimization/before-build.png`
-   `screenshots/Part1-Image-Optimization/after-build.png`
-   `screenshots/Part1-Image-Optimization/after-image-size.png`

------------------------------------------------------------------------

# Part 2 -- Security Hardening

## Improvements

-   Alpine Linux
-   Multi-stage Build
-   Non-root User
-   Production Dependencies Only
-   Vulnerability Scanning using Trivy

### Trivy Results

  Component     Before   After
  ----------- -------- -------
  Critical          45       0
  High             360       2
  Medium          1002       5

> Remaining vulnerabilities are from application dependencies rather
> than the operating system.

### Screenshots

-   `screenshots/Part2-Security-Hardening/before-root-user.png`
-   `screenshots/Part2-Security-Hardening/after-appuser.png`
-   `screenshots/Part2-Security-Hardening/before-trivy-scan.png`
-   `screenshots/Part2-Security-Hardening/after-trivy-scan.png`

------------------------------------------------------------------------

# Part 3 -- Runtime Security

Container executed using:

``` bash
docker run -d --name secure-book-api -p 3002:3000 --memory=256m --cpus=1 --read-only --cap-drop=ALL book-api-after
```

Runtime protections:

-   Memory limit
-   CPU limit
-   Read-only filesystem
-   Dropped Linux capabilities

Verification:

``` text
ReadOnly=true Memory=268435456 NanoCPUs=1000000000 CapDrop=[ALL]
```

Screenshot:

-   `screenshots/Part3-Runtime-Security/runtime-security.png`

------------------------------------------------------------------------

# 🐳 Dockerfile Comparison

## Before

``` dockerfile
FROM node:22
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm","start"]
```

## After

-   Multi-stage build
-   Alpine Linux
-   Non-root user
-   Production dependencies only
-   Optimized image layers

------------------------------------------------------------------------

# ▶️ Running the Application

Clone the repository:

``` bash
git clone <repository-url>
cd book-management-api
```

Install dependencies:

``` bash
npm install
```

Run locally:

``` bash
npm start
```

Application:

``` text
http://localhost:3000
```

------------------------------------------------------------------------

# 🐳 Docker Commands

Build basic image:

``` bash
docker build -t book-api-before .
```

Build optimized image:

``` bash
docker build -f Dockerfile.optimized -t book-api-after .
```

Run optimized container:

``` bash
docker run -d --name secure-book-api -p 3002:3000 --memory=256m --cpus=1 --read-only --cap-drop=ALL book-api-after
```

------------------------------------------------------------------------

# 📈 Results Summary

  Metric                        Before      After
  -------------------------- --------- ----------
  Image Size                   1.65 GB     246 MB
  Size Reduction                   ---   **≈85%**
  Critical Vulnerabilities          45          0
  High Vulnerabilities             360          2
  Runtime Security                None    Enabled
  User                            root    appuser

------------------------------------------------------------------------

# 🎯 Learning Outcomes

-   Docker Image Optimization
-   Multi-stage Docker Builds
-   Docker Layer Caching
-   Alpine Linux
-   Docker Security Best Practices
-   Non-root Containers
-   Trivy Vulnerability Scanning
-   Runtime Security
-   CPU & Memory Resource Limits
-   Read-only Containers
-   Linux Capability Management

------------------------------------------------------------------------

# 👨‍💻 Author

**Arun**

*
