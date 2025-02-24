import mongoose from 'mongoose';

const contentSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    type: { type: String, required: true, enum: ['article', 'video', 'guide', 'webinar'] },
    authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    publishDate: { type: Date },
    tags: { type: [String] },
    status: { type: String, default: 'draft', enum: ['draft', 'published', 'archived'] },
    views: { type: Number, default: 0 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    bookmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
},
    { timestamps: true });

const Content = mongoose.model('Content', contentSchema);

export default Content;
