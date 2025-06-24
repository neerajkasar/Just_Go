const express = require('express');
const router = express.Router();
const {body } = require('express-validator');
const { route } = require('../app');
const userController = require('../controller/user.controller');

route.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstName').isLength({min: 3 }).withMessage('First name must be atleast 3 characters long'),
    body('password').isLength({ min:6 }).withMessage('Password must be 6 characters')
], userController.registerUser);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be 6 characters')
], userController.loginUser);

module.exports = router;