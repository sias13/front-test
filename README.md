# My Application - Frontend

A modern frontend web application with internationalization (i18n), RESTful API integration, hidden sidebar navigation, and Material Design UI.

## Features

- 🌍 **Internationalization** (Italian / English)
- 🔗 **RESTful API** connection layer (Axios)
- 📱 **Hidden sidebar** navigation menu
- 📄 **Copyright footer** on all pages
- 🏠 **Landing page** ("Benvenuto") + About page
- 🐳 **Docker-ready** with multi-stage build

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + TypeScript |
| UI Library | Material UI (MUI) |
| Build Tool | Vite |
| i18n | i18next + react-i18next |
| HTTP Client | Axios |
| Container | Docker (node:20-alpine → nginx:alpine) |

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

## Docker

### Using Docker Compose (recommended)

```bash
docker compose up -d
```

The app will be available at **http://localhost:8080**

### Using Docker directly

```bash
# Build the image
docker build -t my-app-frontend .

# Run the container
docker run -d -p 8080:80 --name my-app my-app-frontend
```

### Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `VITE_API_BASE_URL` | `http://localhost:3000/api` | Backend API base URL |

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Entry point
├── index.css            # Global styles
├── components/
│   ├── Sidebar.tsx      # Hidden left drawer menu
│   └── Footer.tsx       # Copyright footer
├── pages/
│   ├── Landing.tsx      # Landing page ("Benvenuto")
│   └── About.tsx        # About page
├── i18n/
│   └── index.ts         # Internationalization config
└── services/
    └── api.ts           # RESTful API service layer
```

## Image Size

The final Docker image is based on `nginx:alpine` (~40MB), making it extremely lightweight for production deployment.
