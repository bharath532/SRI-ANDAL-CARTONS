import mongoose from 'mongoose';

const ContactInquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    mobile: { type: String, required: true, trim: true },
    company: { type: String, default: '', trim: true },
    requirement: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

export default mongoose.model('ContactInquiry', ContactInquirySchema);

