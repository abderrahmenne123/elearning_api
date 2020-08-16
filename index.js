const express = require('express') ; 
const bodyparser = require('body-parser'); 
const mongoose = require('mongoose'); 
const config = require('./config/config');
const userRoutes = require('./routes/users.routes') ; 


const app = express(); 
mongoose.connect(config.DATABASE, {useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log("Connected to database ");
}).catch(err=>{
    console.log(err); 
});
app.use(bodyparser.json()); // permet de 'accesser au 'Body' de la requete envoyé 
app.use(bodyparser.urlencoded({extended:false})); 

//Declare Routes 

app.use('/users',userRoutes); // affecter tous les sous-routes de users vers '/users' donc à chaque fois on doit appler un route de UsersRoute on doit avant utiliser /users 

// var users = [
//     "user 1","user 2","user 3","user 4",
// ]

// app.get('/users',(req,res)=>{
// res.json({'usersList':users}); 

// });

// app.get('/users/:userid',(req,res)=>{
//     const id = req.params.userid ; 
//     res.json({'user':users[id]}); 
// }); 

// app.post('/adduser',(req,res)=>{
// const name = req.body.name ; 
// users.push(name) ; 
// res.json({'new list':users}); 
// });

// app.delete('/deleteuser/:userid',(req,res)=>{
//     const id = req.params.userid ; 
//     let newList = users.splice(id,1); 
//     users=newList ; 
//     res.json({
//         'result':users
//     })
// })
app.listen(3000,()=>{ // ecoute sur le port definit et crée le server 
    console.log("Server is running"); 
})