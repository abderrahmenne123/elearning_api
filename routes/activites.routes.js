const express = require("express");
const activitesController = require("../controllers/activites.controllers");
const verifToken = require("../utils/verifToken");
const isTeacher = require("../utils/isTeacher");
const router = express.Router(); // router permet de crée les routes des apis

router.post(
  "/addact",
  isTeacher,
  verifToken,
  activitesController.registerActivittes
);
router.get("/:id", isTeacher, verifToken, activitesController.getAllactivites);
router.put("/:id", isTeacher, verifToken, activitesController.updateactivites);
router.delete(
  "/:id",
  isTeacher,
  verifToken,
  activitesController.deleteactivities
);

module.exports = router; // module.exports permet d'exporter une fonction ou une varibale pour qu'elle soit accesbile dans chaque partie du projet
