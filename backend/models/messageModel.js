import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    requester: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    offerer: { type: mongoose.Schema.Types.ObjectID, ref: 'User' },
    titleMessage: { type: String, required: true },
    bodyMessage: { type: String, required: true },
    attachment: { type: String, required: true, uppercase: true },
    read: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true,
  }
);
const Message = mongoose.model('message', messageSchema);
export default Message;