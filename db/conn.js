const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tarefas', 'root', 'sucesso', {
    host: 'localhost',
    dialect: 'mysql'
})
try {
    sequelize.authenticate()
    console.log('Conectamos ao banco de dados')
} catch (error) {
    console.log('Não foi possivel conectar ao banco', error)
}

//exporta como se fosse um modulo, possibilitando importar o código em outro lugar.
module.exports = sequelize