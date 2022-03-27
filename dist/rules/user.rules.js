"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRules = void 0;
const bcrypt = require("bcrypt");
const check_1 = require("express-validator/check");
const user_1 = require("../models/user");
exports.userRules = {
    forRegister: [
        (0, check_1.check)('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_1.User.find({ where: { email } }).then(u => !!!u)).withMessage('Email exists'),
        (0, check_1.check)('password')
            .isLength({ min: 8 }).withMessage('Invalid password'),
        (0, check_1.check)('confirmPassword')
            .custom((confirmPassword, { req }) => req.body.password === confirmPassword).withMessage('Passwords are different')
    ],
    forLogin: [
        (0, check_1.check)('email')
            .isEmail().withMessage('Invalid email format')
            .custom(email => user_1.User.findOne({ where: { email } }).then(u => !!u)).withMessage('Invalid email or password'),
        (0, check_1.check)('password')
            .custom((password, { req }) => {
            return user_1.User.findOne({ where: { email: req.body.email } })
                .then(u => bcrypt.compare(password, u.password));
        }).withMessage('Invalid email or password')
    ]
};
//# sourceMappingURL=user.rules.js.map