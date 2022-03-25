const Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('todos', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            unique: true,
            allowNull: false,
            autoIncrement: true
        },
        user_id : DataTypes.INTEGER,
        text: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'todos',
        timestamps: false,
        underscored: true
    }
    );
};