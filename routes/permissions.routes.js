const permissionController = require("../controllers/permissions.controller");
const express = require("express");
const verifToken = require("../utils/verifToken");
const isAdmin = require("../utils/isAdmin");
const router = express.Router();

router.post("/add", verifToken, isAdmin, permissionController.addPermission);
router.delete(
  "/:id",
  verifToken,
  isAdmin,
  permissionController.deletePremission
);
router.put("/:id", verifToken, isAdmin, permissionController.updatePermission);

module.exports = router;
