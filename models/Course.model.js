const mongoose = require("mongoose");

const CoursModal = new mongoose.Schema({
  name: String,
  chapitre: String,
  teacher: {type:String,ref:'User'},
  category: String,
});

module.exports = mongoose.model("Course", CoursModal);
