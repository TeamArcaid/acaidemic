const Sequelize = require('sequelize')

const sequelize = new Sequelize('arcaid', 'postgres', 'acaidemic', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports.database = sequelize