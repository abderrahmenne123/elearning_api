const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
const mongoose = require('mongoose'); 
module.exports.registerUser = async (req, res) => {
  let result = await User.findOne({
    // verifier si l'utilisateur existe
    email: req.body.email,
  });
  if (result) {
    res.json({
      message: "email existant ",
    });
  } else {
    let hashedPassword = await bcrypt.hash(req.body.password, 10); // crypté le mot de passe
    let newUSer = new User({
      name: req.body.name,
      firstName: req.body.firstName,
      email: req.body.email,
      phone: req.body.phone,
      password: hashedPassword,
      role: req.body.role,
      permissions: req.body.perms,
    });
    let result = await newUSer.save(); // attend l'enregistrement du nouveau utilisateur
    res.json({
      message: result, // reponse à envoyé vers la partie client
    });
  }
};

module.exports.loginUser = async (req, res) => {
  const email = req.body.email; // recupération de la valeur email d'utilisateur
  const password = req.body.password;
  let result = await User.findOne({ email: email }); // recherche si l'utilisateur existe et l'affécté à la variable result
  if (result) {
    console.log(result.password);

    let verif = await bcrypt.compare(password, result.password);
    console.log(verif);
    if (verif) {
      let token = jwt.sign({ id: result._id }, config.SECRET, {
        // generation du token de l'authentification
        expiresIn: 86400, // expires in 24 hours
      });
      res.json({
        auth: true,
        token: token,
        user: result,
      });
    } else {
      res.json({
        auth: false,
        message: " Email ou mot de passe incorrect",
      });
    }
  } else {
    res.json({
      auth: false,
      message: " Email ou mot de passe incorrect",
    });
  }
};

module.exports.getAllUsers = async (req, res) => {
  let result = await User.find().populate("permissions").populate("role"); // recupération de tous les utilisateurs
  res.json({
    //populate permet de recupéré tous les donnés d'une refrence exemple Role juste avec l'id de la role elle permet de récupéré son nom aussi
    users: result,
  });
};

module.exports.getUsersByType = async (req, res) => {
  let result = await User.find({
    // recherche tous les utilisateurs selon un type données
    role: req.params.role,
  });

  res.json({
    users: result,
  });
};

module.exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id); // supression d'un utilisateur

    res.json({
      message: "success",
    });
  } catch (error) {
    res.json({
      message: error,
    });
  }
};
module.exports.updateUser = async (req, res) => {
  try {
    const dataToUpdate = req.body;
    let { ...updateData } = dataToUpdate;

    let result = await User.findOneAndUpdate(req.params.id, updateData, {
      new: true,
    });
  } catch (error) {}
};

module.exports.assignPermisstion = async (req, res) => {
  try {
    let user = await User.findOne({ _id: req.params.id });
    let permissions = user.permissions;
    let newPermissions = [...permissions, new mongoose.Schema.Types.ObjectId(req.body.permission)];
    console.log(newPermissions); 
    let result = User.findByIdAndUpdate(req.params.id, {
      permissions: newPermissions,
    });
    res.json({
      error: false,
      message: "success",
    });
  } catch (err) {
    res.json({
      error: true,
      message: err,
    });
  }
};
