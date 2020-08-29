const Answer = require("../models/Answer.model");
const config = require("../config/config");

module.exports.registerAnswer = async (req, res) => {
    console.log(req.file.filename);
    try {
      
      
        let newAnswer = new Answer({
          name: req.body.name,
          student: req.body.student,
          activity: req.body.activity,
          note: req.body.note,
          attachement: req.file.path,
        });
        let result = await newAnswer.save(); // attend l'enregistrement du nouveau utilisateur
        res.json({
          message: result, // reponse à envoyé vers la partie client
        });
      
    } catch (error) {
      console.log(error);
    }
  };
  module.exports.getAllanswer = async (req, res) => {
   // let result = await Answer.find().populate("User").populate("Activities"); // recupération de tous les utilisateurs
    //res.json({
      //populate permet de recupéré tous les donnés d'une refrence exemple Role juste avec l'id de la role elle permet de récupéré son nom aussi
   //   answer: result,
   // });
  //};
  console.log(req.params.activitesid); 
  try {
    let answers = await Answer.find({ activity: req.params.activitesid }).populate('activity');
    console.log(answers)
    res.json({
      error: false,
      answers: answers,
    });
  } catch (error) {
    res.json({
      error: true,
      message: error,
    });
  }
};

module.exports.getAll = async (req,res)=>{

  let result = await Answer.find().populate('student',['name','firstname']).populate('activity',['contenu']); 

  res.json({
    'error':false, 
    'message':result
  })
}

module.exports.addNote = async (req,res)=>{
 let answer = req.params.answerId ; 
 let noteValue = req.body.note ; 
 try {
  let result = await Answer.findByIdAndUpdate(answer,{note:noteValue}); 
  res.json({
    'error':false, 
    'message':result
  })
 } catch (error) {
  res.json({
    'error':true, 
    'message':error
  })
 }

}