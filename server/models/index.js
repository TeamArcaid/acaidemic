import dbConfig from '../db.config';
import Sequelize from 'sequelize';
import user from './user';
import plant from './plant';
import question from './question';
import response from './response';
import { GlobalLogger } from '../services/logging';

const initializeDatabase = () => {
  const sequelize = new Sequelize.Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
  });

  const db = {};

  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.user = user(sequelize, Sequelize);
  db.plant = plant(sequelize, Sequelize);
  db.question = question(sequelize, Sequelize);
  db.response = response(sequelize, Sequelize);

  db.user.hasMany(db.plant);

  db.plant.belongsTo(db.user);

  db.response.belongsTo(db.question);

  db.user.hasMany(db.response, {});

  return db;
};

let db;

(async ({ env, ...options }) => {
  try {
    const force = env === 'development';
    db = initializeDatabase();
    await db.sequelize.sync({ force: force });
    GlobalLogger.log('Initialized Database.');
  } catch (err) {
    GlobalLogger.error(`Initializing Database.`, { error: err });
  }
})({
  env: process.env.NODE_ENV ?? 'production',
});

export default db;
