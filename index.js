//console.log('teste')

const { application } = require('express')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const Task = require('./models/Task')

const taskRoutes = require('./routes/taskRoutes')
// ENGINE e o SET rederiza o handlebars, e são metodos especificos, e nunca mudam.
app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)
app.use(express.json())
app.use(express.static('public'))
app.use('/task', taskRoutes)

//conn
//sicronização do  app com o banco
//.sync()
//.then(() => {
app.listen(9000)
    //})
    //.catch((err) => console.log(err))
