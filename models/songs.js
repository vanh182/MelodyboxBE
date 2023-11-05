const mongoose = require('mongoose');

const songsSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    language: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    artist: {
        required: true,
        type: String
    },
    album: {
        required: true,
        type: String
    },
    genre: {
        required: true,
        type: String
    },
    duration: {
        required: true,
        type: Number
    },
    lyrics: {
        required: true,
        type: String
    },
    audio: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    }
});


module.exports = mongoose.model('Songs', songsSchema)

