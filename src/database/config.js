import { Sequelize } from "sequelize";
import pg from "pg";

const db = new Sequelize({
  dialect: process.env.DB_DIALECT,
  dialectModule: pg,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  logging: false,
  timezone: "-03:00",
  // dialectOptions: {
  //   useUTC: true,
  //   dateStrings: true,
  // },

  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export { db };
