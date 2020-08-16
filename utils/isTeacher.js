const isTeacher = (req,res,next)=>{

    let role = req.headers['role'] ; 
    
    if(role!=1)
    {
        res.json({'message':'Vous etes pas autorisé'})
    }else 
    {
        next(); 
    }
    
    }
    
module.exports=isTeacher ; 