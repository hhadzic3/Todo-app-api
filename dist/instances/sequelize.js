"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
//import { Sequelize } from 'sequelize'
const Sequelize = require("sequelize");
const db = 'expressapp';
const username = 'root';
const password = 'root';
exports.sequelize = new Sequelize("postgres://pufbjveg:bPoqp6Es7jIMfJDC26FgNgk07YWIvKfD@rogue.db.elephantsql.com/pufbjveg");
/*
export const sequelize = new Sequelize(db, username, password, {
  dialect: "mysql",
  port: 3306,
});*/
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