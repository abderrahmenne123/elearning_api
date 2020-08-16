const express = require('express') ; 
const UserController = require('../controllers/users.controllers'); 
const verifToken = require('../utils/verifToken') ; 
const isAdmin = require('../utils/isAdmin'); 
const router = express.Router() ; // router permet de crée les routes des apis 

router.post('/add',UserController.registerUser); 
router.post('/login',UserController.loginUser); 
router.get('/',verifToken,isAdmin,UserController.getAllUsers) ; // verifTOken permet de verifier si un utilisateur est authentifier ou non , // isAdmin verfier si un utilisateur est l'admin avant d'exectuer la tache principale 
router.get('/:role',verifToken,UserController.getUsersByType); 
router.delete('/:id',verifToken,isAdmin,UserController.deleteUser); 


module.exports= router ; // module.exports permet d'exporter une fonction ou une varibale pour qu'elle soit accesbile dans chaque partie du projet 