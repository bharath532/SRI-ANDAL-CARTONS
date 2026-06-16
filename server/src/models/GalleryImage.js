import mongoose from 'mongoose';

const GalleryImageSchema = new mongoose.Schema(
  {
    fileName: { type: String, required: true },
    originalName: { type: String, default: '' },
    uploadedAt: { type: Date, default: Date.now }
  },
  { versionKey: false }
);

export default mongoose.model('GalleryImage', GalleryImageSchema);

