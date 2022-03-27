"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const Sequelize = require("sequelize");
const sequelize_1 = require("../instances/sequelize");
exports.Todo = sequelize_1.sequelize.define('todos', {
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
});
//# sourceMappingURL=todo.js.map