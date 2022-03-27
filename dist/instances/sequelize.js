"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
//import { Sequelize } from 'sequelize'
//import * as Sequelize from 'sequelize'
const { Sequelize } = require("sequelize");
const db = 'expressapp';
const username = 'root';
const password = 'root';
exports.sequelize = new Sequelize("postgres://pufbjveg:bPoqp6Es7jIMfJDC26FgNgk07YWIvKfD@rogue.db.elephantsql.com/pufbjveg");
//sequelize.authenticate()
/*
// 1) Asociation
db.users.hasMany(db.todos, {
    foreignKey: {
        name: 'user_id'
    }
});
db.todos.belongsTo(db.users, {
    as: 'usersList',
    foreignKey: {
        name: 'user_id'
    }
});
*/ 
//# sourceMappingURL=sequelize.js.map