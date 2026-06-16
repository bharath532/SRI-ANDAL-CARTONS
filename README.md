# Sri Andal Cartons — Company Website (React + Express + MongoDB)

## What’s included
- Responsive React frontend with React Router, Axios, Bootstrap 5 + Custom CSS
- Node/Express backend with JWT-protected Admin Dashboard
- MongoDB for contact inquiries + gallery images
- Contact form saves inquiries via `POST /api/contact`
- WhatsApp deep-link + Email (mailto) integration
- Admin can view/delete inquiries and upload gallery images

## Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)

## Project structure
- `client/` — React frontend
- `server/` — Express backend

## Setup
### 1) Backend
```bash
cd server
npm install
cp .env.example .env
npm run dev
```

### 2) Frontend
```bash
cd ../client
npm install
cp .env.example .env
npm start
```

## Deployment
See `client/DEPLOYMENT.md` and `server/DEPLOYMENT.md` after scaffold is generated.

