
import { Router } from 'express'
const { matchedData } = require('express-validator')
const { validationResult } = require('express-validator')
import { userRules } from '../rules/user.rules'
import { UserService } from '../services/user.service'
import { User, UserAddModel } from '../models/user'
import * as bcrypt from 'bcrypt'

export const userRouter = Router()
const userService = new UserService()

// GET
userRouter.get('/users', (req, res) => {
    User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
        .then(users => res.json(users)).catch(err => {
            console.log(err)
          })
});

userRouter.post('/register', userRules['forRegister'], (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const payload = matchedData(req) as UserAddModel
    const user = userService.register(payload)

    return user.then(u => res.json(u)).catch(err => {
        console.log(err)
      })
})

userRouter.post('/login', userRules['forLogin'], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty())
        return res.status(422).json(errors.array())

    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).send('Invalid Email or Password.')
    
    console.log(user)

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) return res.status(400).send('Invalid Email or Password.')

    const payload = matchedData(req) as UserAddModel
    const token = userService.login(payload)

    return token.then(t => res.json(t))
})