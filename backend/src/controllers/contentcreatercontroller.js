// controllers/contentController.js
import Content from '../models/content.model.js';


exports.createContent = async (req, res) => {
  try {
    const { title, body, type, authorId, tags } = req.body;

    if (!title || !body || !type || !authorId || !tags) {
      return res.status(404).json({
        message: "all fileds all required",
        success: false,
      })
    }
    const content = await Content.create({
      title,
      body,
      type,
      authorId,
      tags,
    });

    return res.status(201).json({ success: true, data: content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.getContent = async (req, res) => {
  try {
    const content = await Content.find().populate('authorId', 'name email');

    if (!content) {
      return res.status(404).json({ success: false, message: "Content not found" })
    }

    return res.status(200).json({ success: true, data: content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};


exports.updateContent = async (req, res) => {
  try {
    const content = await Content.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!content) {
      return res.status(404).json({ success: false, message: 'Content not found' });
    }

    return res.status(200).json({ success: true, data: content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};



exports.deleteContent = async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);

    if (!content) {
      return res.status(404).json({ success: false, message: 'Content not found' });
    }

    await content.remove();
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};