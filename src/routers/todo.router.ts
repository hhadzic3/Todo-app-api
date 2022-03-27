
import { Router } from 'express'
import { Todo, TodoAddModel } from '../models/todo'

export const todoRouter = Router()

// GET
todoRouter.get('/todos/:id', (req, res) => {
    Todo.findAll({
        where: {
            userId: req.params.id
        }
    }).then(todos => res.json(todos)).catch(err => {
            console.log(err)
          })
});

// POST
todoRouter.post('/addTodo', (req, res) => {
    if (!req.body.todoText)
        res.json({
            error: 'Bad Data'
        })
    Todo.create(req.body).then(data => {
            res.send(data)
        })
        .catch(err => {
            console.log(err);
            res.send(err)
        })
})

// DELETE
todoRouter.delete('/deleteTodo/:id', (req, res) => {
    Todo.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        res.json({
            status: 'Deleted!'
        })
    })
})