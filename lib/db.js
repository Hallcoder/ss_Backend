const mongoose = require('mongoose');
require('dotenv').config();
module.exports.db =  async(app)=>{
  return await mongoose.connect(process.env.DB_URL)
        .then(_=>{
          app.listen(process.env.PORT || 3000, () => console.log("Listening..."))
          console.log('connected to the database')
        })
        .catch(error => console.error(error))
}