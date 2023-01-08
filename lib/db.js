const mongoose = require('mongoose');
require('dotenv').config();
module.exports.db =  async(app)=>{
  return await mongoose.connect(process.env.DB_URL)
        .then(_=>{
          console.log('connected to the database successfully...')
        })
        .catch(error => console.error(error))
}