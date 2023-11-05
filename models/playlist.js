const mongoose = require('mongoose');

const playlistsSchema = new mongoose.Schema({
    id:{
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    songs: {
        required: true,
        type: Array
    }
})


module.exports = mongoose.model('Playlists', playlistsSchema)