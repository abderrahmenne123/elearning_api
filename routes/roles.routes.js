const express = require('express'); 
const RoleController = require('../controllers/roles.controller'); 
const router = express.Router(); 

router.post('/addrole',RoleController.addRole); 





module.exports = router ; 