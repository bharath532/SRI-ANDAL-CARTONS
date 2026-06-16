import ContactInquiry from '../models/ContactInquiry.js';

export async function createContact(req, res) {
  try {
    const { name, mobile, company, requirement } = req.body;

    if (!name || !mobile || !requirement) {
      return res.status(400).json({ message: 'name, mobile, requirement are required' });
    }

    const inquiry = await ContactInquiry.create({
      name,
      mobile,
      company: company || '',
      requirement
    });

    return res.status(201).json({ message: 'Inquiry saved', id: inquiry._id });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
}

