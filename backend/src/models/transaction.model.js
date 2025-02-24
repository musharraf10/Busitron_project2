import mongoose from 'mongoose';


const transactionSchema = mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    amount: { type: Number, required: true },
    currency: { type: String, default: 'usd' },
    stripePaymentId: { type: String, unique: true },
    type: { type: String, required: true, enum: ['subscription', 'premium_webinar'] },
    status: { type: String, default: 'pending', enum: ['pending', 'succeeded', 'failed'] },
    transactionDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  });

const Transaction = mongoose.model('transaction', transactionSchema);


export default Transaction