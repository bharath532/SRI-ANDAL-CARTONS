import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, '../.env')
});
import rateLimit from 'express-rate-limit';

import { connectMongo } from './config/mongo.js';

import contactRoutes from './routes/contactRoutes.js';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import galleryRoutes from './routes/galleryRoutes.js';



const app = express();

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" }
  })
);
app.use(
  cors({
    origin: [process.env.CORS_ORIGIN || 'http://localhost:3000','http://localhost:5173'],
    credentials: false
  })
);


app.use(express.json({ limit: '1mb' }));

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 300,
    standardHeaders: true,
    legacyHeaders: false
  })
);


app.get('/api/health', (req, res) => res.json({ ok: true }));



app.get('/test-image', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../uploads/images-1781579713633.jpg')
  );
});
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send('User-agent: *\nAllow: /\n');
});

app.use(
  '/uploads',
  express.static(path.resolve(__dirname, '../uploads'))
);


app.use('/api/contact', contactRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/gallery', galleryRoutes);

const port = process.env.PORT || 4000;

connectMongo()
  .then(() => {
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error('Failed to start server', err);
    process.exit(1);
  });

  console.log('ENV CHECK:', process.env.MONGODB_URI);
  console.log(path.join(process.cwd(), 'uploads'));
