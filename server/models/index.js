import dbConfig from '../db.config'

import Sequelize from 'sequelize'
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
})

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize

import user from './user'
import plant from './plant'
import question from './question'
import response from './response'

db.user = user(sequelize, Sequelize)
db.plant = plant(sequelize, Sequelize)
db.question = question(sequelize, Sequelize)
db.response = response(sequelize, Sequelize)

db.plant.belongsTo(db.user, {
    foreignKey: "user_id",
    as: "user",
})

db.plant.belongsToMany(db.question, {
    through: "plant_question",
    as: "questions",
    foreignKey: "plant_id",
})

db.question.belongsToMany(db.plant, {
    through: "plant_question",
    as:"questions",
    foreignKey: "question_id",
})

db.response.belongsTo(db.question, {
    foreignKey: 'question_id',
    as: "question_responses"
})

db.response.belongsTo(db.plant, {
    foreignKey: 'plant_id',
    as: "plant_responses"  
})

db.response.belongsTo(db.user, {
    foreignKey: "user_id",
    as: "user_responses"
})


export default db