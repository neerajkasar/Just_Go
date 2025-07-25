const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullName: {
        firstName:{
            type: String,
            required: true,
            minlength:[3, 'Firstname must be at least 3 character long'],
        },
        lastName:{
            type: String,
            minlength: [3, 'Lastname must be atleast 3 character long'],
        }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\S+@\S\.\S+$/, 'Please enter valid email']
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String
    },
    status: {
        type: String,
        enum:['active','inactive'],
        default: 'inactive',
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minlenght: [3,'Color must be atleast 3 characters long'],
        },
        plate:{
            type: String,
            require: true,
            minlenght: [3, 'Plate must be atleast 3 characters long'],
        },
        capacity:{
            type: Number,
            required: true,
            min: [1,'Capacity must be at least 1'],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ['car', 'motorcycle', 'auto'],
        }
    },
    location: {
        lat: {
            type: Number
        },
        lng: {
            type: Number
        }
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h'})
}

captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;
