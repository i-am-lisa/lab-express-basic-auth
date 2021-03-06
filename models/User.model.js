// User model here
const mongoose = require("mongoose");


let UserSchema = new mongoose.Schema({
    name: String, 
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  })

  let UserModel = mongoose.model('user', UserSchema)

  module.exports = UserModel

