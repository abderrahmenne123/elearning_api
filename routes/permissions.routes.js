const permissionController = require('../controllers/permissions.controller'); 
const express = require('express'); 
const verifToken = require('../utils/verifToken') ; 
const isAdmin = require('../utils/isAdmin'); 
const router = express.Router(); 

router.post('/add',permissionController.addPermission); 
router.delete('/:id',permissionController.deletePremission); 
router.put('/:id',permissionController.updatePermission); 


module.exports = router ; 