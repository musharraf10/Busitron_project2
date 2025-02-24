import mongoose from 'mongoose';


const { Schema } = mongoose;

const bookmarkSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  contentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Content',
    required: true
  },
  createdAt: { type: Date, default: Date.now },
});

const bookmark = mongoose.model('Bookmark', bookmarkSchema);

export default bookmark