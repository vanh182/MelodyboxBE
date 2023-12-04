const express = require("express");
const router = express.Router();
const songsController = require("../controllers/songsController");
module.exports = router;

// Lấy bài hát
router.get("/:audio", songsController.getAudio);

router.get('/playlists/:title/songs', songsController.getSongsByPlaylist);

//Get tất cả bài hát theo loại (language)
router.get("/songs/:language", songsController.getSongsByLanguage);

//tìm 1 baihat by id
router.get("/song/:id", songsController.getSongById);

//tim theo ten
router.get("/songbyname/:title", songsController.getSongByName);