import express from 'express';
import path from 'path';
import fs from 'fs';
import dotenv from 'dotenv';

import { listGallery } from '../controllers/adminController.js';
import GalleryImage from '../models/GalleryImage.js';

dotenv.config();

const router = express.Router();

router.get('/images', listGallery);

// Serve raw files
const uploadDir = process.env.UPLOAD_DIR || 'uploads';
const absUploadDir = path.resolve(process.cwd(), uploadDir);

router.get('/file/:fileName', async (req, res) => {
  const { fileName } = req.params;
  const filePath = path.join(absUploadDir, fileName);

  if (!fs.existsSync(filePath)) return res.status(404).json({ message: 'Not found' });
  return res.sendFile(filePath);
});

export default router;

