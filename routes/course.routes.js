const express = require('express') ; 
const coursController = require('../controllers/course.controllers'); 
const verifToken = require('../utils/verifToken') ; 
//const isTeacher = require('../utils/isTeacher'); 
const router = express.Router() ; // router permet de crée les routes des apis 

router.post('/addcourse',coursController.registerCourse); 


module.exports= router ; // module.exports permet d'exporter une fonction ou une varibale pour qu'elle soit accesbile dans chaque partie du projet 