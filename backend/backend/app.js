// app.js
import express from "express";
import cors from "cors";
import userRoute from "./src/routes/userRoute.js";
import configureCors from './src/middelware/configureCors.js'
import { requestLogger, addTimeStamp } from './src/middelware/customMiddleware.js'
import { globalErrorhandler } from "./src/middelware/errorHandler.js";
import BookmarkRoute from "./src/routes/bookmarkRoute.js";
import contentRoute from "./src/routes/contentcreaterRoute.js";
import likeRoute from "./src/routes/likeRoute.js";
import subscribtionRoute from "./src/routes/subscribtionRoute.js";
import transactionRoute from "./src/routes/transactionRoute.js";



const app = express();

// Middleware
app.use(configureCors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// use the custom middleware
app.use(requestLogger)
app.use(addTimeStamp)

// Routes  // routes  
app.use("/api/v1/user", userRoute);
app.use("/api/v1/bookmark", BookmarkRoute);
app.use("/api/v1/contentRoute", contentRoute);
app.use("/api/v1/likes",likeRoute);
app.use("/api/v1/subscribtions",subscribtionRoute);
app.use('/api/v1/transactions',transactionRoute)


// globelerror-handler
app.use(globalErrorhandler)

// Export the app instance
export { app };
