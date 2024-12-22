const News = require('../models/newsModel');

exports.getAllNews = async (req, res) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createNews = async (req, res) => {
  const { title, content, author } = req.body;

  if (!title || !content || !author) {
    return res.status(400).json({ message: 'Title, content, and author are required' });
  }

  const news = new News({
    title,
    content,
    author
  });

  try {
    const newNews = await news.save();
    res.status(201).json(newNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateNews = async (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;

  try {
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    news.title = title || news.title;
    news.content = content || news.content;
    news.author = author || news.author;

    const updatedNews = await news.save();
    res.json(updatedNews);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteNews = async (req, res) => {
  const { id } = req.params;

  try {
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: 'News article not found' });
    }

    await news.remove();
    res.json({ message: 'News article deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};