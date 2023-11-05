const express = require("express");

const router = express.Router();

module.exports = router;

const Categories = require("../models/categories");
const Songs = require("../models/songs");
const Playlists = require("../models/playlist");


//Post loại bài hát Method
router.post("/post", (req, res) => {
  const data = new Categories({
    language: req.body.language,
    tenloai: req.body.tenloai,
  });
  try {
    const dataToSave = data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Post bài hát

router.post("/post_songs", async (req, res) => {
  try {
    const data = req.body;

    const song = new songs({
      id: data.id,
      language: data.language,
      title: data.title,
      artist: data.artist,
      album: data.album,
      genre: data.genre,
      duration: data.duration,
      lyrics: data.lyrics,
      audio: data.audio,
      image: data.image
    });

    await song.save();

    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get all Method
router.get("/getAll", async (req, res) => {
  try {
    const data = await Categories.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//lấy ds nhạc theo title
// router.get("/playlist/:title", async (req, res) => {
//   try {
//     const title = req.params.title;
//     const playlist = await Playlists.find({ title });

//     if (!playlist) {
//       res.status(404).json({ message: "Không tìm thấy playlist" });
//       return;
//     }

//     res.json(playlist);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

router.get('/playlists/:title/songs', async (req, res) => {
  const { title } = req.params;

  // Find the playlist with the specified title
  const playlist = await Playlists.findOne({ title });

  // If the playlist is not found, return an error
  if (!playlist) {
    return res.status(404).send('Playlist not found');
  }

  // Get the song IDs from the playlist
  const songIds = playlist.songs;

  // Get the corresponding songs from the database
  const songs = [];
  for (const songId of songIds) {
    const song = await Songs.findOne({ id: songId });
    songs.push(song);
  }

  // Return the list of songs
  res.send(songs);
});




// Get categories by ID
router.get("/category/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Categories.findById(id);

    if (!category) {
      res.status(404).json({ message: "Loại bài hát không tồn tại" });
      return;
    }

    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get tất cả bài hát theo loại (language)
router.get("/songs/:language", async (req, res) => {
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
});

//tìm 1 baihat by id
router.get("/song/:id", async (req, res) => {
    try {
      const id = req.params;
      const song = await Songs.find(id);
  
      if (!song) {
        res.status(404).json({ message: "Bài hát không tồn tại" });
        return;
      }
  
      res.json(song);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
//tim theo ten
router.get("/songbyname/:title", async (req, res) => {
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
});



//Update by ID Method
router.patch("/update/:id", (req, res) => {
  res.send("Update by ID API");
});

//Delete by ID Method
router.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});
