import express from 'express';
import { requireAdmin } from '../middleware/authJwt.js';
import { countLeads, deleteInquiry, listInquiries } from '../controllers/adminController.js';
import { uploadImages } from '../controllers/galleryController.js';
import { galleryMulter } from '../config/upload.js';

const router = express.Router();

router.use(requireAdmin);

router.get('/inquiries', listInquiries);
router.delete('/inquiries/:id', deleteInquiry);
router.get('/stats/leads', countLeads);

router.post('/gallery/upload', galleryMulter.array('images', 20), uploadImages);

export default router;

