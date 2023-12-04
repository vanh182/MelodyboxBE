const Categories = require('../models/categories'); 

const getAllCategories = async (req, res) => {
  try {
    const data = await Categories.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCategoryById = async (req, res) => {
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
};

module.exports = {
  getAllCategories,
  getCategoryById,
};
