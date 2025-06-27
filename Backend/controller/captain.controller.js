const captianModel  =  require('../models/captain.model');
const captainService = require('../services/captain.service')
const { validationResult } = require('express-validator');

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