"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const user_1 = require("../models/user");
const { check } = require('express-validator');
const express_validator_1 = require("express-validator");
const isValidUser = email => {
    return user_1.User.findAll({ where: { email } }).then((user) => {
        if (!(typeof user !== "undefined" && user.length == 0)) {
            return Promise.reject('E-mail already in use');
        }
    });
};
const emailExists = email => {
    return user_1.User.findAll({ where: { email } }).then((user) => {
        if ((typeof user !== "undefined" && user.length == 0)) {
            return Promise.reject('E-mail does not exits');
        }
    });
};
exports.userRules = {
    forRegister: [
        check('email').isEmail().withMessage('Invalid email format'),
        (0, express_validator_1.body)('email').custom(isValidUser),
        check('password').isLength({ min: 8 }).withMessage('Invalid password'),
        check('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Passwords are different')
    ],
    // TODO: Password is not checked properly
    forLogin: [
        check('email')
            .isEmail().withMessage('Invalid email format'),
        (0, express_validator_1.body)('email').custom(emailExists)
    ]
};
//# sourceMappingURL=user.rules.js.map