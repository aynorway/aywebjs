// # 4 创建utils/db.utils.js，用于创建数据库连接池。

// utils/db.utils.js
const mysql = require('mysql');
const dbConfig = require('../config/db.config');

const db = mysql.createPool(dbConfig);

module.exports = db;
