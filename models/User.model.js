const mongoose = require('mongoose'); 

const UserModal = new mongoose.Schema({
'name': String, 
'firstName':String, 
'email':String, 
'password':String, 
'phone':Number,
Roles:[{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }], 
type:Number
}); 

module.exports =mongoose.model('User',UserModal); 

