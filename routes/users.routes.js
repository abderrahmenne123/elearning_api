const express = require('express') ; 
const UserController = require('../controllers/users.controllers'); 
const verifToken = require('../utils/verifToken') ; 
const isAdmin = require('../utils/isAdmin'); 
const router = express.Router() ; 

router.post('/add',UserController.registerUser); 
router.post('/login',UserController.loginUser); 
router.get('/',verifToken,isAdmin,UserController.getAllUsers) ; 
router.get('/:role',verifToken,UserController.getUsersByType); 



module.exports= router ; 