const Course = require("../models/Course.model");
const config = require("../config/config");

//const {isEmpty} = require('../config/config');
module.exports.registerCourse = async (req, res) => {
  console.log(req.file.filename);
  try {
    let result = await Course.findOne({
      // verifier si le cours existe
      name: req.body.name,
    });

    if (result) {
      res.json({
        message: "cours existant ",
        result: result,
      });
    } else {
      let newCours = new Course({
        name: req.body.name,
        description: req.body.description,
        teacher: req.body.teacher,
        category: req.body.category,
        attachement: req.file.path,
      });
      let result = await newCours.save(); // attend l'enregistrement du nouveau utilisateur
      res.json({
        message: result, // reponse à envoyé vers la partie client
      });
    }
  } catch (error) {
    console.log(error);
  }
};
module.exports.getAllCourse = async (req, res) => {
  let result = await Course.find(); // recupération de tous les utilisateurs
  res.json({
    course: result,
  });
};
module.exports.deletecours = async (req, res) => {
  try {
    await Course.findByIdAndDelete(req.params.id); // supression d'un utilisateur

    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
module.exports.updateUCouse = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;

    let result = await Course.findOneAndUpdate(req.params.id, updateData, {
      new: true,
    });
    res.json({
      message: "update ...",
      error: false,
    });
  } catch (error) {}
};

module.exports.updateCourseFile = async (req, res) => {
  try {
    let result = await Course.findOneAndUpdate(
      req.params.id,
      {
        attachement: req.file.path,
      },
      {
        new: true,
      }
    );
    console.log(result);
    res.json({
      message: "success",
      error: false,
    });
  } catch (err) {
    res.json({
      message: err,
      error: true,
    });
  }
};

module.exports.getCoursesByTeacher = async (req, res) => {
    console.log(req.params.teacherid); 
  try {
    let courses = await Course.find({ teacher: req.params.teacherid }).populate('teacher',['name','firstName']);
    console.log(courses)
    res.json({
      error: false,
      courses: courses,
    });
  } catch (error) {
    res.json({
      error: true,
      message: error,
    });
  }
};
