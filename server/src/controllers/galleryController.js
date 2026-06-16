import GalleryImage from '../models/GalleryImage.js';

export async function uploadImages(req, res) {
  console.log('FILES:', req.files);

  const files = req.files || [];

  if (!files.length) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const created = await Promise.all(
    files.map((f) =>
      GalleryImage.create({
        fileName: f.filename,
        originalName: f.originalname
      })
    )
  );

  res.status(201).json({ message: 'Uploaded', count: created.length });
}

