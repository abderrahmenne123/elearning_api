const express = require("express");
const coursController = require("../controllers/course.controllers");
const verifToken = require("../utils/verifToken");
const multer = require("multer");
const isTeacher = require("../utils/isTeacher");
const router = express.Router(); // router permet de crée les routes des apis
const uplouad = multer({ dest: "uploads/" });
router.post(
  "/addcourse",
  verifToken,
  isTeacher,
  uplouad.single("course"),
  coursController.registerCourse
);
router.put(
  "/updatecoursefile/:id",
  verifToken,
  isTeacher,
  uplouad.single("course"),
  coursController.updateCourseFile
);
router.delete("/:id", verifToken, isTeacher, coursController.deletecours);
router.put("/:id", verifToken, isTeacher, coursController.updateUCouse);
router.get(
  "/byteacher/:teacherid",
  verifToken,
  isTeacher,
  coursController.getCoursesByTeacher
);
module.exports = router; // module.exports permet d'exporter une fonction ou une varibale pour qu'elle soit accesbile dans chaque partie du projet
