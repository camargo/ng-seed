# ng-seed

This is a basic application that you can use to bootstrap your new Angular 2 project.

To get started, change all occurrences of `"app"` in this project to your app name.

## Features

1. Latest version of Angular: `4.0.0-beta.5 (2017-01-25)`
2. Webpack 2
3. Linting
4. Unit Testing
5. E2E Testing
6. Docker
7. Routing
  - `/home`:  Not lazy-loaded
  - `/about`: Lazy-loaded
8. HTTP Request via Service (GET public IP address)
9. Dev build (via Webpack Dev Server) and Prod build (via AOT)

## Download Project & Install Dependencies

```bash
git clone https://github.com/camargo/ng-seed.git
cd ng-seed
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
npm run build:dev
```

Visit [http://localhost:8080/](http://localhost:8080/) to view the running application.

## Run via Docker (Prod Mode)

Build image and run container from that image:

```bash
npm run build:prod
docker build -t app-image $(pwd)/dist
docker run --name app -d -p 8081:80 app-image
```

Just run container:

```bash
npm run build:prod
docker run --name app -v $(pwd)/dist:/usr/share/nginx/html:ro -d -p 8081:80 nginx
```

Visit [http://localhost:8081/](http://localhost:8081/) to view the running application.

## Run Unit Tests

```bash
npm run unit
```

## Run E2E Tests

```bash
npm run e2e
```
