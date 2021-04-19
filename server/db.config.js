import Sequelize from 'sequelize'
import plant from './models/plant'

const sequelize = new Sequelize('arcaid', 'postgres', 'acaidemic', {
    host: 'localhost',
    dialect: 'postgres'
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize


db.plants = plant(sequelize, Sequelize)

export default db