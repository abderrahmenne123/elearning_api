const mongoose = require("mongoose");

const CoursModal = new mongoose.Schema({
  name: String,
  description: String,
  teacher: {type:String,ref:'User'},
  category: String,
  attachement:String
});

module.exports = mongoose.model("Course", CoursModal);
