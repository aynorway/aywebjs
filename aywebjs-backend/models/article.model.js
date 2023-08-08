// # 8 在models目录中，创建user.model.js和article.model.js文件，这些文件会包含与数据库交互的代码。


// models/article.model.js
const db = require('../utils/db.utils');

exports.createArticle = async (title, category_id, required_level, tags, author, content) => {
  const query = 'INSERT INTO Article (title, category_id, required_level, tags, author, content) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [title, category_id, required_level, tags, author, content];

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

exports.getArticlesByLevel = async (level) => {
  const query = 'SELECT * FROM Article WHERE required_level <= ?';
  const values = [level];

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

// 其他关于文章的函数，如更新文章、删除文章等
