const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullName: {
    firstName : {
      type: String,
      required: true,
      minlength: [3, 'First name must be at least 3 characters']
    },
    lastName: {
      type : String,
      required: true,
      minlength: [3, 'Last name must be at least 3 characters']
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, 'Email must be at least 5 characters']
  },
  password: {
    type: String,
    required: true
  },
  socketId: {
    type: String
  }
});

//  Use normal function to preserve `this` context
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  return token;
};

// Accept plain-text password to compare against the stored hash
userSchema.methods.comparePassword = async function (plainPassword) {
    const result = await bcrypt.compare(plainPassword, this.password);
    // console.log('decrypt result',result);
    console.log("Validate:", await bcrypt.comparePassword(password));

    
  return result;
};

//  Static method to hash a given password
userSchema.statics.hashPassword = async function (plainPassword) {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(plainPassword, salt);
};

// Optional: Pre‑save hook to auto‑hash passwords on save/update
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, await bcrypt.genSalt(10));
  }
  next();
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
