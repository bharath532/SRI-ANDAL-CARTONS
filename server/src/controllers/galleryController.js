import { cloudinary } from '../config/cloudinary.js';
import GalleryImage from '../models/GalleryImage.js';


function toCloudinaryResourceType(mimetype) {
  if (!mimetype) return 'image';
  return mimetype.startsWith('video/') ? 'video' : 'image';
}

export async function uploadImages(req, res) {
  const files = req.files || [];

  if (!files.length) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  try {
    const uploadResults = await Promise.all(
      files.map(async (f) => {
        const uploadResponse = await new Promise((resolve, reject) => {
          cloudinary.uploader.upload_stream(
            {
              resource_type: toCloudinaryResourceType(f.mimetype),
              folder: 'sri-andal-cartons/gallery'
            },
            (error, result) => {
              if (error) return reject(error);
              resolve(result);
            }
          ).end(f.buffer);
        });

        return uploadResponse;
      })
    );

    const created = await Promise.all(
      uploadResults.map((r) =>
        GalleryImage.create({
          imageUrl: r.secure_url,
          publicId: r.public_id,
          originalName: r.original_filename || ''
        })
      )
    );

    res.status(201).json({ message: 'Uploaded', count: created.length });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: 'Upload failed' });
  }
}

export async function deleteGalleryImage(req, res) {
  const { id } = req.params;

  try {
    const record = await GalleryImage.findById(id);
    if (!record) return res.status(404).json({ message: 'Not found' });

    await cloudinary.uploader.destroy(record.publicId, { resource_type: 'image' });
    await GalleryImage.findByIdAndDelete(id);

    res.json({ message: 'Deleted' });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    res.status(500).json({ message: 'Delete failed' });
  }
}


