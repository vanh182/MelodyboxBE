const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    language: {
        required: true,
        type: String
    },
    tenloai: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    }
})


module.exports = mongoose.model('Categories', categoriesSchema)