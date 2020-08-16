const isAdmin = (req,res,next)=>{

let role = req.headers['role'] ; 

if(role!=0)
{
    res.json({'message':'Vous etes pas autorisé'})
}else 
{
    next(); 
}

}

module.exports=isAdmin ; 