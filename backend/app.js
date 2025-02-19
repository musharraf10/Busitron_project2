// app.js
import express from "express";
import cors from "cors";
import userRoute from "./src/routes/userRoute.js";
import configureCors from './src/middelware/configureCors.js'
import {requestLogger, addTimeStamp} from './src/middelware/customMiddleware.js'
import {globalErrorhandler} from "./src/middelware/errorHandler.js";

const app = express();

// Middleware
app.use(configureCors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// use the custom middleware

app.use(requestLogger)
app.use(addTimeStamp)

// Routes
app.use("/api/v1/user", userRoute);


// globelerror-handler

app.use(globalErrorhandler)

// Export the app instance
export { app };
