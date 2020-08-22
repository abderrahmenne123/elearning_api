const mongoose = require('mongoose'); 

const PermissionModal = new mongoose.Schema({

    'permission':String
}); 

module.exports = mongoose.model('Permission',PermissionModal); 