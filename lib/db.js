const mongoose = require('mongoose')
module.exports.db =  async()=>{
  return await mongoose.connect('mongodb://localhost:27017')
        .then(_=> console.log('connected to the database'))
        .catch(error => console.error(error))
}