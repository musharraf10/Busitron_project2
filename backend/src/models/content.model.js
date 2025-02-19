    import mongoose from 'mongoose';

    const contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['article', 'video', 'guide', 'webinar'],
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    price :{
        type : Number,
        default : 0
    },
    tags: [String],
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
    },
    publishDate: {
        type: Date,
    },
    }, { timestamps: true });

    const Content = mongoose.model('Content', contentSchema);

    export default Content;
