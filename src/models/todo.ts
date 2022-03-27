import * as Sequelize from 'sequelize'
import { sequelize } from '../instances/sequelize'
import { User } from '../models/user'

export interface TodoAddModel {
    todoText: string
    completed: boolean
}

export interface TodoModel extends Sequelize.Model<TodoModel, TodoAddModel> {
    id: number,
    userId: number,
    todoText: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string
}

export interface TodoViewModel {
    id: number,
    todoText: string,
    completed: boolean
}

export const Todo = sequelize.define('todos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: Sequelize.INTEGER,
        foreignKey: true
    },
    todoText: Sequelize.STRING,
    completed: Sequelize.BOOLEAN
})

Todo.belongsTo(User, {
    as: 'usersTodoList',
    foreignKey: {
        name: 'userId'
    }
});