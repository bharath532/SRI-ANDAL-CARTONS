import mongoose from 'mongoose';

const GalleryImageSchema = new mongoose.Schema(
  {
    imageUrl: { type: String, required: true },
    publicId: { type: String, required: true, unique: true },

    // Optional: keep original file name for admin context
    originalName: { type: String, default: '' }
  },
  { versionKey: false }
);

export default mongoose.model('GalleryImage', GalleryImageSchema);


