const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      min: [3, "first name must be at least 3 characters long"],
      max: 255,
    },
    lastname: {
      type: String,
      // required: true,
      min: [3, "first name must be at least 3 characters long"],
      max: 255,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    select: false,  // means jab bhi user ko select krenge to password show na ho
    min: 6,
    max: 1024,
  },
  socketId: {
    type: String,
  },
});


userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id},
    process.env.JWT_SECRET
  );
  return token;
}  

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
    }

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;