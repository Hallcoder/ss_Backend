const mongoose = require('mongoose');

const permissionSchema = mongoose.Schema({
studentNames:{
    type:String,
    required:true,
},

departureDate:{
    type:Date,
    required:true,
},

departureTime:{
type:String,
required:true,
},

returnDate:{
    type:Date,
    required:true,
},
returnTime:{
    type:String,
    required:true
},
reason:{
    type:String,
    required:true
},
issuer:{
    type:String,
    required:true
}
})
module.exports.validatePermission = (permission) => {

}
module.exports.Permission = mongoose.model('Permission',permissionSchema);