import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    name: { type: String, required: false },
    surname: { type: String, required: false },
    birthday: { type: String, required: false },
    birthplace: { type: String, required: false },
    gender: { type: String, enum:["M", "F"], required: false },
    cf: { type: String, required: false, unique: true, uppercase: true },
    email: { type: String, required: true, unique: true },
    city: { type: String, required: false, uppercase: true },
    zipCode: { type: Number, required: false },
    phone: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    referer: {type: String , required: false },
    isAdmin: { type: Boolean, default: false, required: true },
    isSeller: { type: Boolean, default: false, required: true },
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
