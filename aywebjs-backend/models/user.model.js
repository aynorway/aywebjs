// # 7 在models目录中，创建user.model.js和article.model.js文件，这些文件会包含与数据库交互的代码。



// models/user.model.js
const db = require('../utils/db.utils');
const bcrypt = require('bcrypt');

exports.createUser = async (username, password, firstName, lastName) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  const query = 'INSERT INTO User (username, password_hash, salt, level, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [username, passwordHash, salt, 1, firstName, lastName];

  return new Promise((resolve, reject) => {
    db.query(query, values, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

exports.getUserByUsername = async (username) => {
  const query = 'SELECT * FROM User WHERE username = ?';
  const values = [username];

  return new Promise((resolve, reject) => {
    db.query(query, values, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results[0]);
      }
    });
  });
};
