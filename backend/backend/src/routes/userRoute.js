import express from 'express';
import { RegisterUser, LoginUser, getUserById, getAllUsers, restuserpassword, logout, passwordRestOtp, isAuthenticated } from "../controller/userController.js";
import userauth from "../middelware/userauth.js";
import google from "../controller/googleauth.js";

const userRoute = express.Router();

// Define your routes
userRoute.post('/register', RegisterUser);
userRoute.post('/login', LoginUser);
userRoute.post('/google', google);
userRoute.post('/logout', logout);
userRoute.get('/getAllUsers', getAllUsers);
userRoute.get('/getUserById/:id', getUserById);
userRoute.post('/is-authenticated', userauth, isAuthenticated);
userRoute.post('/send-restotp-password', passwordRestOtp);
userRoute.post('/resetpassword', restuserpassword);

// Export the router directly (without calling it as a function)
export default userRoute;
