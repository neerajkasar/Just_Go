const express = require('express');
const router = express.Router();
const { body } =  require('express-validator');
const captainController = require('../controller/captain.controller');

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3}).withMessage('First name must be at least 3 charactes long'),
    body('password').isLength({ min:6 }).withMessage('Password must be atleast 6 charactes long'),
    body('vehicle.color').isLength({ min: 3 }).withMessage('Color must be atlease 3 characters'),
    body('vehicle.plate').isLength({ min: 3 }).withMessage('Plate must be atleast 3 characters'),
    body('vehicle.capacity').isInt({ min: 3 }).withMessage('Capacity mustbe atleast3 characters'),
    body('vehicle.capacity').isInt(['car', 'motorcycle','auto']).withMessage('Invalid vehicle type.')
],
    captainController.registerCaptain
)

module.exports = router;