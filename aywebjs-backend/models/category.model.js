// # 14 文件包含与Category表相关的数据库操作代码。

// models/category.model.js
const db = require('../utils/db.utils');

exports.createCategory = async (name, parentId) => {
  const query = 'INSERT INTO Category (name, parent_id) VALUES (?, ?)';
  const values = [name, parentId || null];

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

exports.getCategoryById = async (id) => {
  const query = 'SELECT * FROM Category WHERE id = ?';
  const values = [id];

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

exports.getCategories = async () => {
  const query = 'SELECT * FROM Category';

  return new Promise((resolve, reject) => {
    db.query(query, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

// 其他关于分类的函数，如更新分类、删除分类等 （待完成）
