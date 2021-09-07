const { truncate } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;