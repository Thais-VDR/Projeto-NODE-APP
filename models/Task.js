const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Task = db.define('task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

//exporta como se fosse um modulo, possibilitando importar o código em outro lugar.
module.exports = Task