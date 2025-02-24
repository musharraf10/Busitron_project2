// controllers/transactionController.js
import Transaction from '../models/Transaction';

exports.createTransaction = async (req, res) => {
  try {
    const { userId, amount, currency, stripePaymentId, type } = req.body;


    if (!userId) {
      return res.status(400).json({ message: 'User ID is required' });
    }
    if (!amount) {
      return res.status(400).json({ message: 'Amount is required' });
    }
    if (!currency) {
      return res.status(400).json({ message: 'Currency is required' });
    }
    if (!stripePaymentId) {
      return res.status(400).json({ message: 'Stripe payment ID is required' });
    }
    if (!type) {
      return res.status(400).json({ message: 'Transaction type is required' });
    }


    const transaction = await Transaction.create({
      userId,
      amount,
      currency,
      stripePaymentId,
      type,
    });

    res.status(201).json({ success: true, data: transaction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().populate('userId', 'name email');
    if (!transactions) {
      return res.status(404).json({ message: 'No transactions found' });
    }
    res.status(200).json({ success: true, data: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};