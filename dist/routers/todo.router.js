"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const todo_1 = require("../models/todo");
exports.todoRouter = (0, express_1.Router)();
// GET
exports.todoRouter.get('/todos/:id', (req, res) => {
    todo_1.Todo.findAll({
        where: {
            userId: req.params.id
        }
    }).then(todos => res.json(todos)).catch(err => {
        console.log(err);
    });
});
// POST
exports.todoRouter.post('/addTodo', (req, res) => {
    if (!req.body.todoText)
        res.json({
            error: 'Bad Data'
        });
    todo_1.Todo.create(req.body).then(data => {
        res.send(data);
    })
        .catch(err => {
        console.log(err);
        res.send(err);
    });
});
// DELETE
exports.todoRouter.delete('/deleteTodo/:id', (req, res) => {
    todo_1.Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({
            status: 'Deleted!'
        });
    });
});
//# sourceMappingURL=todo.router.js.map