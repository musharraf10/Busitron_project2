import express from 'express';
import { createTransaction, getTransactions } from '../controller/transactionscontroller.js';

const transactionRouter = express.Router();

transactionRouter.post('/posttransaction', createTransaction);
transactionRouter.get('/gettransactions', getTransactions);

export default transactionRouter;
