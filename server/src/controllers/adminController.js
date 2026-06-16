import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import ContactInquiry from '../models/ContactInquiry.js';
import GalleryImage from '../models/GalleryImage.js';
import AdminUser from '../models/AdminUser.js';

export async function adminLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'email and password are required' });

    // Bootstrapping admin user from env (if DB empty)
    const existing = await AdminUser.findOne({ email: email.toLowerCase() });

    if (!existing) {
      // If this matches env admin, allow and create hash.
      if (email.toLowerCase() === String(process.env.ADMIN_EMAIL).toLowerCase()) {
        const passwordHash = await bcrypt.hash(String(process.env.ADMIN_PASSWORD), 10);
        const created = await AdminUser.create({ email: email.toLowerCase(), passwordHash });
        const ok = await bcrypt.compare(password, created.passwordHash);
        if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: created.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
        return res.json({ token });
      }

      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const ok = await bcrypt.compare(password, existing.passwordHash);
    if (!ok) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: existing.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.json({ token });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

export async function listInquiries(req, res) {
  const inquiries = await ContactInquiry.find().sort({ createdAt: -1 }).lean();
  res.json({ inquiries });
}

export async function deleteInquiry(req, res) {
  const { id } = req.params;
  await ContactInquiry.findByIdAndDelete(id);
  res.json({ message: 'Deleted' });
}

export async function countLeads(req, res) {
  const total = await ContactInquiry.countDocuments();
  res.json({ totalLeads: total });
}

export async function listGallery(req, res) {
  const images = await GalleryImage.find().sort({ uploadedAt: -1 }).lean();
  res.json({ images });
}

