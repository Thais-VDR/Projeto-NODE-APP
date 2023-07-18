const Task = require('../models/Task')

module.exports = class TaskController {
    static createTask(req, res) {
        res.render('tasks/create')

    }

    static async createTaskSave(req, res) {
        const task = {
            title:req.body.title,
            description:req.body.description,
            done:false
        }
        //AWAIT e ASYNC ele trabalham juntos.
        await Task.create(task)

        res.redirect('/tasks')
    }

    static async showTasks(req, res){
        const task = await Task.findAll({raw: true})
        res.render('tasks/all', {tasks})
    }
}