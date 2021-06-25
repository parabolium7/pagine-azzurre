import mongoose from 'mongoose'

const newsletterSchema = new mongoose.Schema(
  {
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    citybase: { type: String, required: false },
    verified: { type: Boolean, required: true, default: false },
    newsnumber: { type: Number, required: true, default: 0 },  // TODO: Future implementation.
  },
  {
    timestamps: true,
  }
)

const Newsletter = mongoose.model('Newsletter', newsletterSchema)
export default Newsletter
