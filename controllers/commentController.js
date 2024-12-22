const Comment = require('../models/commentModel');

exports.getCommentsByNewsId = async (req, res) => {
  try {
    const comments = await Comment.find({ newsId: req.params.newsId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createComment = async (req, res) => {
  const { content, author } = req.body;
  const { newsId } = req.params;

  if (!content || !author) {
    return res.status(400).json({ message: 'Content and author are required' });
  }

  const comment = new Comment({
    content,
    author,
    newsId
  });

  try {
    const newComment = await comment.save();
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};