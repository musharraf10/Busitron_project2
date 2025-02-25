
import Bookmark from '../models/bookmark.model.js';


const createBookmark = async (req, res) => {
  try {
    const { userId, contentId } = req.body;


    if (!userId || !contentId) {
      return res.status(404).json({
        message: "User ID and Content ID are required",
        success: false
      })
    }

    const bookmark = await Bookmark.create({ userId, contentId });


    if (!bookmark) {
      return res.status(404).json({
        message: "Failed to create bookmark",
        success: false
      })
    }

    return res.status(201).json({ success: true, data: bookmark });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


const getUserBookmarks = async (req, res) => {
  try {
    const bookmarks = await Bookmark.find({ userId: req.params.userId }).populate('contentId', 'title');
    if (!bookmarks) {
      return res.status(404).json({ success: false, message: 'No bookmarks found' })
    }
    return res.status(200).json({ success: true, data: bookmarks });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


export {
  createBookmark,
  getUserBookmarks

}