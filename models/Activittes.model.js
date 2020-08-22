
const ActivitiesModal = new mongoose.Schema({
    'name': String,
    'course': String, 
    'student':String, 
    'teacher':String, 
    'contenu':String 
    
    }); 
    
    module.exports =mongoose.model('Activities',ActivitiesModal); 
    
    