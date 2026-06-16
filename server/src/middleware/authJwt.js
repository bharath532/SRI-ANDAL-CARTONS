import jwt from 'jsonwebtoken';

export function requireAdmin(req, res, next) {
  try {
    const header = req.headers.authorization;
    if (!header?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Missing token' });
    }

    const token = header.slice('Bearer '.length);
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    if (payload?.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    req.admin = payload;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

