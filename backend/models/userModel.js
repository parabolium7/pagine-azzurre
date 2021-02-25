import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: false, unique: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    birthday: { type: String, required: true },
    birthplace: { type: String, required: true },
    gender: { type: String, enum:["M", "F"], required: true },
    cf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: true, uppercase: true },
    zipCode: { type: Number, required: true },
    phone: { type: Number, required: false, unique: true },
    password: { type: String, required: true },
    referer: {type: String , required: false },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: true, required: true },
    activity: { type: Number, default: 0, require: false },
    seller: {
      name: String,
      logo: String,
      description: String,
      rating: { type: Number, default: 0, required: true },
      numReviews: { type: Number, default: 0, required: true },
    },
  },
  {
    timestamps: true,
  }
);
const User = mongoose.model('User', userSchema);
export default User;
