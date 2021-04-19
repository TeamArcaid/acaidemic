import Sequelize from 'sequelize'

import user from './models/user'
import plant from './models/plant'
import question from './models/question'
import response from './models/response'

const sequelize = new Sequelize('arcaid', 'postgres', 'acaidemic', {
    host: 'localhost',
    dialect: 'postgres'
})

const db = {};

db.sequelize = sequelize

db.user = user(sequelize)
db.plant = plant(sequelize)
db.question = question(sequelize)
db.response = response(sequelize)

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