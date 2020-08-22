const Role = require("../models/Role.model");

module.exports.addRole = async (req, res) => {
  let newRole = new Role({
    role: req.body.name,
  });
  let result = await newRole.save();
  if (result) {
    res.json({
      message: result,
      error: false,
    });
  } else {
    res.json({
      message: "Erreur est servenu",
      error: false,
    });
  }
};
