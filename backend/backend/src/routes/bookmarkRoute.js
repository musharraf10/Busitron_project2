import express from "express";
import { createBookmark, getUserBookmarks } from "../controller/bookmarkController.js";


const BookmarkRoute = express.Router();

BookmarkRoute.post("/bookmarks", createBookmark);

BookmarkRoute.get("/bookmarks/:userId", getUserBookmarks);

export default BookmarkRoute;
