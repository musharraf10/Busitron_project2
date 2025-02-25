import Like from "../models/likes.model.js";
import Content from "../models/content.model.js";

const likeUpdate = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;
  try {
    const content = await Content.findById(id);
    if (!content) {
      return res.status(404).json({ message: "Content not found", success: false });
    }
    const existingLike = await Like.findOne({ userId, contentId: id });
    if (existingLike) {
      await Like.findByIdAndDelete(existingLike._id);
      return res.status(200).json({ message: "Like removed", success: true });
    } else {
      const newLike = new Like({ userId, contentId: id });
      await newLike.save();
      return res.status(201).json({ message: "Content liked", success: true });
    }
  } catch (error) {
    console.error("Error updating like status:", error);
    return res.status(500).json({ message: "Internal Server Error", success: false });
  }
};

export { likeUpdate };
