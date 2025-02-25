import express from 'express';
import { likeUpdate } from '../controller/likecontrollers.js';
// import authMiddleware from '../middleware/authMiddleware.js';

const Likerouter = express.Router();


Likerouter.post('/postlike/:id', likeUpdate);

export default Likerouter;
