const express = require('express') ; 
const answerController = require('../controllers/answer.controller'); 
const multer = require('multer'); 
const isTeacher = require('../utils/isTeacher'); 
const router = express.Router() ; // router permet de crée les routes des apis 
const uplouad = multer({dest: 'uploadsAnswer/'})
router.post('/addanswer',uplouad.single('answer'),answerController.registerAnswer); 
router.get('/getanswersbyactivity/:activitesid',answerController.getAllanswer); 
router.get('/getallanswers',answerController.getAll); 
router.put('/updatenote/:answerId',isTeacher,answerController.addNote); 
module.exports= router ;