import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { Todo } from '../models/todo'

export interface UserAddModel {
    email: string
    password: string
}

export interface UserModel extends Sequelize.Model<UserModel, UserAddModel> {
    id: number,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string
}

export interface UserViewModel {
    id: number,
    email: string
}

export const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: Sequelize.STRING,
    password: Sequelize.STRING
});
