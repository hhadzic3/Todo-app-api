"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const { matchedData } = require('express-validator');
const { validationResult } = require('express-validator');
const user_rules_1 = require("../rules/user.rules");
const user_service_1 = require("../services/user.service");
const user_1 = require("../models/user");
const bcrypt = require("bcrypt");
exports.userRouter = (0, express_1.Router)();
const userService = new user_service_1.UserService();
// GET
exports.userRouter.get('/users', (req, res) => {
    user_1.User.findAll({
        attributes: {
            exclude: ['password']
        }
    })
        .then(users => res.json(users)).catch(err => {
        console.log(err);
    });
});
exports.userRouter.post('/register', user_rules_1.userRules['forRegister'], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const payload = matchedData(req);
    const user = userService.register(payload);
    return user.then(u => res.json(u)).catch(err => {
        console.log(err);
    });
});
exports.userRouter.post('/login', user_rules_1.userRules['forLogin'], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(422).json(errors.array());
    const user = await user_1.User.findOne({ email: req.body.email });
    if (!user)
        return res.status(400).send('Invalid Email or Password.');
    console.log(user);
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send('Invalid Email or Password.');
    const payload = matchedData(req);
    const token = userService.login(payload);
    return token.then(t => res.json(t));
});
//# sourceMappingURL=user.router.js.map