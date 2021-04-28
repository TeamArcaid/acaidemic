import dbConfig from "../db.config";
import Sequelize from "sequelize";

const config = dbConfig[process.env.ENVIRONMENT];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

import user from "./user";
import plant from "./plant";
import question from "./question";
import response from "./response";

db.user = user(sequelize, Sequelize);
db.plant = plant(sequelize, Sequelize);
db.question = question(sequelize, Sequelize);
db.response = response(sequelize, Sequelize);

db.plant.belongsTo(db.user);

db.user.hasMany(db.plant);

db.plant.belongsToMany(db.question, {
  through: "plant_question",
  as: "questions",
  foreignKey: "plant_id",
});

db.question.belongsToMany(db.plant, {
  through: "plant_question",
  as: "questions",
  foreignKey: "question_id",
});

db.response.belongsTo(db.question, {
  as: "question",
});

db.question.hasMany(db.response, { as: "responses" });

db.response.belongsTo(db.plant, {
  as: "plant",
});

db.plant.hasMany(db.response, { as: "responses" });

db.response.belongsTo(db.user, {
  as: "user",
});

db.user.hasMany(db.response, { as: "responses" });

db.sequelize.sync();

export default db;
