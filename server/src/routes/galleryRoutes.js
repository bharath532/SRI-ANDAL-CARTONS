import express from 'express';
import dotenv from 'dotenv';

import { listGallery } from '../controllers/adminController.js';

dotenv.config();

const router = express.Router();

router.get('/images', listGallery);

export default router;


