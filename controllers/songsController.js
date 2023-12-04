const Songs = require("../models/songs");
const Playlists = require("../models/playlist");

const getAudio = async (req, res) => {
    try {
        const title = req.params.audio;
        const song = await Songs.find({ audio });
        if (!song) {
            res.status(404).json({ message: "Không tìm thấy loại bài hát" });
            return;
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSongsByPlaylist = async (req, res) => {
    const { title } = req.params;
    const playlist = await Playlists.findOne({ title });
    if (!playlist) {
        return res.status(404).send('Playlist not found');
    }
    const songIds = playlist.songs;
    const songs = [];
    for (const songId of songIds) {
        const song = await Songs.findOne({ id: songId });
        songs.push(song);
    }
    res.send(songs);
};

const getSongsByLanguage = async (req, res) => {
    try {
        const language = req.params.language;
        const song = await Songs.find({ language });
        if (!song) {
            res.status(404).json({ message: "Không tìm thấy loại bài hát" });
            return;
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSongById = async (req, res) => {
    try {
        const id = req.params.id;
        const song = await Songs.findById(id);
        if (!song) {
            res.status(404).json({ message: "Bài hát không tồn tại" });
            return;
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSongByName = async (req, res) => {
    try {
        const title = req.params.title;
        const song = await Songs.find({ title });
        if (!song) {
            res.status(404).json({ message: "Không tìm thấy loại bài hát" });
            return;
        }
        res.json(song);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAudio,
    getSongsByPlaylist,
    getSongsByLanguage,
    getSongById,
    getSongByName,
};
