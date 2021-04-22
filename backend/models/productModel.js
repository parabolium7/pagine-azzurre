import mongoose from 'mongoose';
const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);
// TODO: Just concider if priceVal required true is better.
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    seller: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    image: { type: String, required: true },
    brand: { type: String, required: false },
    category: { type: String, required: false },
    description: { type: String, required: false },
    priceVal: { type: Number, required: false },
    priceEuro: { type: Number, required: false },
    countInStock: { type: Number, required: false },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true },
    section: { type: String, required: true, default: 'offro' },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', productSchema);

export default Product;
