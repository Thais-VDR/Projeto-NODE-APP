const express = require('express')
//ROUTER é um metodo que gerencia as rotas do meu projeto, não precisa criar varias rotas.
const router = express.Router()
const TaskController = require('../controllers/TaskController')

//Rota para ver as tarefas
router.get('/add', TaskController.createTask)
//Rota para criar uma tarefa
router.post('/add', TaskController.createTaskSave)

router.get('/', TaskController.showTasks)

 module.exports = router 