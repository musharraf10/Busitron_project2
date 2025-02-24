import like from "../models/likes.model.js";



const likeUpdate = async (req, res, next) => {

  const { id } = req.params;

  try {

    const user = await User.find({ id: id }).populate({
      path: 'likes',
      model: 'Like'
    })

    if(!user) {
      
    }
  } catch (error) {
    console.error(error);

    return res.status(404).json({
      message: "Post not found",
      sucess: false,
    })

  }

}