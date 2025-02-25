// models/Like.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const likeSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content', required: true },
  createdAt: { type: Date, default: Date.now },
});


const like = mongoose.model('Like', likeSchema);

export default like;