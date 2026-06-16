import fs from 'fs';
import path from 'path';
import multer from 'multer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

dotenv.config();

const uploadDir = process.env.UPLOAD_DIR || 'uploads';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const absUploadDir = path.resolve(__dirname, '../../uploads');

if (!fs.existsSync(absUploadDir)) {
  fs.mkdirSync(absUploadDir, { recursive: true });
}

export const galleryMulter = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, absUploadDir),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname) || '.jpg';
      const safeName = file.fieldname.replace(/[^a-z0-9_-]/gi, '_');
      const ts = Date.now();
      cb(null, `${safeName}-${ts}${ext}`);
    }
  }),
  limits: { fileSize: 8 * 1024 * 1024 }
});

