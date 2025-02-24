
import mongoose from 'mongoose';
const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, required: true },
  stripeSubscriptionId: { type: String, unique: true },
  status: {
    type: String,
    default: 'active',
    enum: ['active', 'canceled', 'expired'],
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
const Subscription = mongoose.model('Subscription', subscriptionSchema);

export default Subscription;
