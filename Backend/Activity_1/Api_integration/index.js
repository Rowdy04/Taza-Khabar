const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());

const NewsModel = require("./models/news.js");

mongoose.connect("mongodb://localhost:27017/DB", {
}
)
   .then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.json({ text: "Hello World" });
});

app.post('/api/addnews', async (req, res) => {
    try {
        const news = await NewsModel.create(req.body);
        res.status(200).json(news);
        console.log(req.body);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/news', async (req, res) => {
    try {
        const news = await NewsModel.find();
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.get('/api/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const news = await NewsModel.findbyid(id);
        res.status(200).json(news);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.put('/api/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const news = await NewsModel.findByIdAndUpdate(id, req.body);
        if (!news) {
            res.status(404).send('News not found');
        }
        const updatenews = await NewsModel.findById(id);
        res.status(200).json(updatenews);
    } catch (error) {
        res.status(500).send(error);
    }
});

app.delete('/api/news/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const news = await NewsModel.findByIdAndDelete(req.params.id);
        if (!news) {
            res.status(404).send('News not found');
        }
        const updatenews = await NewsModel.findbyid(id);
        res.status(204).json("Deleted");
    } catch (error) {
        res.status(500).send(error);
    }
});