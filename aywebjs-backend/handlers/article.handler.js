// # 10 然后在handlers目录中创建user.handler.js和article.handler.js文件，这些文件将处理HTTP请求并返回响应。


// handlers/article.handler.js
const articleModel = require('../models/article.model');

exports.createArticle = async (req, res) => {
  const { title, category_id, required_level, tags, author, content } = req.body;

  try {
    await articleModel.createArticle(title, category_id, required_level, tags, author, content);
    res.status(200).send({ message: 'Article created successfully' });
  } catch (error) {
    res.status(500).send({ error });
  }
};

exports.getArticles = async (req, res) => {
  const level = req.level; // 从验证中间件获取级别

  try {
    const articles = await articleModel.getArticlesByLevel(level);
    res.status(200).send({ articles });
  } catch (error) {
    res.status(500).send({ error });
  }
};


// handlers/article.handler.js
// const jwt = require('jsonwebtoken');
// const db = require('../utils/db.utils');
// const jwtConfig = require('../config/jwt.config');

// const getArticles = (req, res) => {
//   // ... 获取文章列表的代码...
// };

// module.exports = {
//   getArticles
// };
