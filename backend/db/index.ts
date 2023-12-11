import { Sequelize } from "Sequelize";
import defineModels from "./models";

export let db: any = null; // Change type

const createDbConnection = async () => {
   const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.db',
  });

  const models = defineModels(sequelize);
  await sequelize.sync({ force: true });

  return {
    sequelize,
    models,
  };
};

export const getDBObject = async () => {
  if(db === null) {
    try {
      const dbObject = await createDbConnection();
      await dbObject.sequelize.authenticate();
      console.log('Connection has been established successfully.');
      
      db = dbObject;
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  return db;
}
