const Role = require("../models/Role.model");

const isAdmin = async (req, res, next) => {
  let role = req.headers["role"];
  if (!role) {
    res.json({ message: "Vous etes pas autorisé" });
  } else {
    let selectedRole = await Role.findById(role);
    if (
      selectedRole.role.toLowerCase().trim() !=
      "Admin".toLowerCase().trim()
    ) {
      res.json({ message: "Vous etes pas autorisé" });
    } else {
      next();
    }
  }
};

module.exports = isAdmin;
