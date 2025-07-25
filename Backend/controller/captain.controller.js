const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerCaptain = async  (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: error.array});
    }
    const { fullname, email, passowrd, vehicle} = req.body;

    const isCaptainAlreadyExist = await captainModel.findOne({ email });

    if(isCaptainAlreadyExist){
       return res.status(400).json({ error: 'Captain already exist' })
    }
    const hashedPassword = await createModel.hashedPassword(passowrd);

    const captian = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    
    res.status(201).json({ token, captain });
}

module.exports.loginCaptain = async (req,res,next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: error.array });
    }
    const { email, password } = req.body;
    const captain = await captainModel.findOne({email}).select('password');
    if(!captain){
        return res.status(400).json({ message: 'Invalid email or password'});
    }
    const isMatch = await captainModel.comparePassword(password);
    if(!isMatch){
        return res.status(400).json({ message: 'Invalid username or password'});
    }

    const token = captain.generateAuthToken();
    res.cookie('token',token);
    res.status(200).json({token, captain});
}

module.exports.getCaptainProfile = async (req,res,next) => {
    res.status(200).json({ captain: req.captain });
}
module.exports.logoutCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1];
    await c.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout Successfully' });
}