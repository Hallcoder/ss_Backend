const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
token:{
    type:String,
    required:true
}
});

module.exports.User = mongoose.model('users',userSchema);