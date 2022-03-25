require('dotenv').config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`${process.env.DB_URL}`) 
const path = require('path');

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Op = Sequelize.Op;

// Importing modals
// for sequlize > 6.0.0 importing will be like this:
// db.users = require(path.join(__dirname + '/users.js'))(sequelize, Sequelize.DataTypes)

db.users = sequelize.import(path.join(__dirname , '/users.js'));
db.todos = sequelize.import(path.join(__dirname , '/todos.js'));


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

module.exports = db;