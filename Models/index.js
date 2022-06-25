const config = require("../config/config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    config.DATABASE,
    config.USERNAME,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect,
        operatorsAliases: false,
        pool: {
            max: config.pool.max,
            min: config.pool.min,
            accquire: config.pool.acquire,
            idle: config.pool.idle,
        },
    }
);
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;
