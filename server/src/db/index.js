const Sequelize = require('sequelize');
const config = require('./../config');

const db = {
    sequelize:new Sequelize(config.sequelize.database,config.sequelize.username,config.sequelize.password,config.sequelize)
};

db.user = db.sequelize.import('./table/user.js');  // 用sequelize的import方法引入表结构，实例化了User。
module.exports = db;