const Permission = require("../models/permission.model");

module.exports.addPermission  = async (req, res) => {
  let newPermission = new Permission({
    permission: req.body.name,
  });
  let result = await newPermission.save();
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
module.exports.updatePermission =async (req,res)=>{
    
    try {
        const dataToUpdate = req.body;
        let { ...updateData } = dataToUpdate;

        let result = await Permission.findOneAndUpdate(req.params.id,updateData,{new:true})
    } catch (error) {
        
    }
    res.json({
        message: "update ...",
        error: false,})
}
module.exports.deletePremission = async (req, res) => {
    try {
      await Permission.findByIdAndDelete(req.params.id); // supression d'un utilisateur
  
      res.json({
        message: "successss",
      });
    } catch (error) {
      res.json({
        message: error,
      });
    }
  };