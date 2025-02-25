import express from 'express';
import { getContent, createContent, updateContent, deleteContent } from '../controller/contentcreatercontroller.js';

const contentRoute = express.Router();


contentRoute.post('/postcontent', createContent);


contentRoute.get('/getcontent', getContent);


contentRoute.put('/putcontent/:id', updateContent);


contentRoute.delete('/delatecontent/:id', deleteContent);

export default contentRoute;
