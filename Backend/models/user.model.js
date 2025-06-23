const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullName: {
        firstName : {
            type: String,
            require: true,
            minlength: [3, 'First name must be at least 3 characters']
        },
        lastName : {
            type : String,
            require: true,
            minlength: [3, 'Last name must be at least 3 characters']
        }
    },
    email: {
        type: String,
        require: true,
        unique: true,
        minlength: [5,'Email must be atleast 5 characters']
    },
    password: {
        type: String,
        require: true   
    },
    socketId: {
        type: String,
    }
})

userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET);
    return token; 
}

userSchema.methods.comparePassword = async () =>  await bcrypt.compare(password,this.password)

userSchema.statics.hashPassword = async () => await bcrypt.hash(password, 10);

const userModel = mongoose.model('user',userSchema);

module.exports = userModel