// models/Webinar.js
const mongoose = require('mongoose');
const { Schema } = mongoose;

const webinarSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  hostId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  scheduledAt: { type: Date, required: true },
  duration: { type: Number, required: true }, 
  isPremium: { type: Boolean, default: false },
  stripePriceId: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const webinar = mongoose.model('Webinar', webinar);

export default webinar