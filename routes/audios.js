const express = require("express");

const router = express.Router();

module.exports = router;

const Categories = require("../models/categories");
const Songs = require("../models/songs");
//api phat am thanh
//http://192.168.1.30:3000/audios/Belle.mp3
router.get("/:audio", async (req, res) => {
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
  });