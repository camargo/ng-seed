# ng-seed

This is a basic application that you can use to bootstrap your new Angular 2 project.

To get started, change all occurrences of `"app"` in this project to your app name.

## Features

1. Latest stable version of Angular 2: `2.0.1 (2016-09-23)`
2. Webpack
3. Linting (Part of build process)
4. Unit Testing
5. E2E Testing
6. Docker
7. Routing
  - `/home`:  Not lazy-loaded
  - `/about`: Lazy-loaded
8. HTTP Request via Service (Get public IP address)

## Install Dependencies

```bash
npm cache clean
npm install
```

## Remove Dependencies & Built Folders

```bash
rm -rf node_modules
rm -rf dist
```

## Run via Webpack (Dev Mode)

```bash
npm start
```

## Run via Docker (Prod Mode)

```bash
npm run build
docker build -t app-image .
docker run --name app -d -p 8080:80 app-image
```

## Run Unit Tests

```bash
npm run unit
```

## Run E2E Tests

```bash
npm run e2e
```
