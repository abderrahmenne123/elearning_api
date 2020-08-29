const mongoose = require("mongoose");
const ActivitiesModal = new mongoose.Schema({
    'name': String,
    'course': {type:mongoose.Schema.Types.ObjectId,ref:'Course'}, 
    'student': [{type:mongoose.Schema.Types.ObjectId,ref:'User'}], 
    'teacher': {type:mongoose.Schema.Types.ObjectId,ref:'User'}, 
    'contenu':String 
    }); 
    
    module.exports =mongoose.model('Activities',ActivitiesModal); 
    
    