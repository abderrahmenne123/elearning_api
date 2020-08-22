const cours = require('../models/Course.model') ; 
const config = require('../config/config');
module.exports.registerCourse=async (req,res)=>{
let result = await cours.findOne({ // verifier si le cours existe 
    'name':req.body.name
}); 
if(result){
    res.json({
        'message':'cours existant '
    })
}else
{   
   let newCours = new cours({
       name:req.body.name, 
       chapitre:req.body.chapitre,
       teacher :req.body.teacher, 
      catergory :req.body.catergory 
       
   }); 
   let result = await newCours.save() ; // attend l'enregistrement du nouveau utilisateur
   res.json({
    'message':result // reponse à envoyé vers la partie client
})
}
}
module.exports.getAllCourse= async (req,res)=>{

    let result = await cours.find(); // recupération de tous les utilisateurs 
    res.json({
        'course':result
    })
}
module.exports.deletecours = async (req,res)=>{
    try {
        await cours.findByIdAndDelete(req.params.id); // supression d'un utilisateur 
    
        res.json({
            'message':'success'
        })
        
    } catch (error) {
        res.json({
            'message':error
        })
    }
    
    }
    module.exports.updateUCouse =async (req,res)=>{
    
        try {
            const dataToUpdate = req.body;
            let { ...updateData } = dataToUpdate;
    
            let result = await cours.findOneAndUpdate(req.params.id,updateData,{new:true})
        } catch (error) {
            
        }
    }