const activittes = require('../models/Activittes.model') ; 
const config = require('../config/config');
module.exports.registerActivittes=async (req,res)=>{
let result = await activittes.findOne({ // verifier si le cours existe 
    'name':req.body.name
}); 
if(result){
    res.json({
        'message':'activity existant '
    })
}else
{   
   let newActivittes = new activittes({
    course:req.body.course, 
       student:req.body.studiant,
       teacher :req.body.teacher, 
      contenu :req.body.contenu 
       
   }); 
   let result = await newActivittes.save() ; // attend l'enregistrement du nouveau utilisateur
   res.json({
    'message':result // reponse à envoyé vers la partie client
})
}
}
module.exports.getAllactivites= async (req,res)=>{

    let result = await activittes.find(); // recupération de tous les utilisateurs 
    res.json({
        'course':result
    })
}
module.exports.deleteactivities = async (req,res)=>{
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
    module.exports.updateactivites =async (req,res)=>{
    
        try {
            const dataToUpdate = req.body;
            let { ...updateData } = dataToUpdate;
    
            let result = await cours.findOneAndUpdate(req.params.id,updateData,{new:true})
        } catch (error) {
            
        }
    }