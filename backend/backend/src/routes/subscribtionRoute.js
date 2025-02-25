import express from 'express';
import { createSubscription, getSubscriptions, cancelSubscription } from '../controller/subscriptioncontroller.js';

const subscribtionRoute = express.Router();


subscribtionRoute.post('/postsubscription', createSubscription);


subscribtionRoute.get('/getsubscriptions', getSubscriptions);

subscribtionRoute.delete('/delatesubscription/:id', cancelSubscription);

export default subscribtionRoute;
