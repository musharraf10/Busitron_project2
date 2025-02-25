
import Subscription from '../models/subscription.model.js';


const createSubscription = async (req, res) => {
  try {
    const { userId, plan, stripeSubscriptionId } = req.body;
    if (!userId) {
      return res.status(403).json({
        message: 'User ID is required',
        success: false,
      })
    }
    if (!stripeSubscriptionId || !userId || !plan) {
      return res.status(403).json({
        message: 'All fields are required',
        success: false,
      })
    }

    const subscription = await Subscription.create({
      userId,
      plan,
      stripeSubscriptionId,
      startDate,
      endDate,
    });

    res.status(201).json({ success: true, data: subscription });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


const getSubscriptions = async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate('userId', 'name email');

    if (!subscriptions) {
      return res.status(404).json({
        success: false,
        message: 'No subscriptions found'
      })
    }

    return res.status(200).json({ success: true, data: subscriptions, message: "Subscriptions" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


const cancelSubscription = async (req, res) => {
  try {

    const { id } = req.params
    const subscription = await Subscription.findById(id);

    if (!subscription) {
      return res.status(404).json({ success: false, message: 'Subscription not found' });
    }

    await subscription.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


export {
  createSubscription,
  getSubscriptions,
  cancelSubscription

}