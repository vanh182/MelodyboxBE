const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Get categories
router.get('/getAll', categoriesController.getAllCategories);

// Get categories by ID
router.get("/category/:id", categoriesController.getCategoryById);

module.exports = router;