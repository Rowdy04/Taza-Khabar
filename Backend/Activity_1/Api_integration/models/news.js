const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"]

    },
    content: {
        type: String,
        required: [true, "Content is required"]
    },

    link: {
        type: String,
        required: true,
        default: 0,
    },
    Image: {
        type: String,
        required: true,
        default: 0,
    }
},
    {
        timestamps: true
    });

const NewsModel = mongoose.model('News', newsSchema);
module.exports = NewsModel;
