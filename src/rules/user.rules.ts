
import * as bcrypt from 'bcrypt'
import { User } from '../models/user'
const { check } = require('express-validator')
import { body, CustomValidator } from 'express-validator';


const isValidUser: CustomValidator = email => {
  return User.findAll( {where: { email }}).then((user) => {
    if ( !(typeof user !== "undefined" && user.length == 0)) {
      return Promise.reject('E-mail already in use');
    }
  });
};
const emailExists: CustomValidator = email => {
  return User.findAll( {where: { email }}).then((user) => {
    if ( (typeof user !== "undefined" && user.length == 0)) {
      return Promise.reject('E-mail does not exits');
    }
  });
};

export const userRules = {
  forRegister: [ 
    check('email').isEmail().withMessage('Invalid email format'),
    body('email').custom(isValidUser),
      check('password').isLength({ min: 8 }).withMessage('Invalid password'),
    check('confirmPassword')
      .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Passwords are different')
  ],
  forLogin: [
    check('email')
      .isEmail().withMessage('Invalid email format'),
      body('email').custom(emailExists)    
  ]
}