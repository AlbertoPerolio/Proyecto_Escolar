// src/DB/instance.js
import { Sequelize } from "sequelize";
import config from "../src/config.js";

const sequelize = new Sequelize(
  config.mysql.database,
  config.mysql.user,
  config.mysql.password,
  {
    host: config.mysql.host,
    port: config.mysql.port,
    dialect: "postgres",
    logging: false,
  },
);

export default sequelize;
