const mongoose = require('mongoose'); 

const AnswerModal = new mongoose.Schema({
    'student':{type:mongoose.Schema.Types.ObjectId,ref:'User'}, 
     'activity':{type:mongoose.Schema.Types.ObjectId,ref:'Activities'},
     'note':Number,
     attachement:String
}); 

module.exports = mongoose.model('Answer',AnswerModal); 