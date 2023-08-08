// # 12 最后，我们将更新server.js文件，以使用新创建的模块。


// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// 引入路由
const userRoutes = require('./routes/user.routes');
const articleRoutes = require('./routes/article.routes');
const categoryRoutes = require('./routes/category.routes');
// const verifyToken = require('./middlewares/verifyToken');

// 创建 Express 应用
const app = express();

// 测试数据库连接
const dbConfig = require('./config/db.config');
const db = require('./utils/db.utils');
db.getConnection((err, connection) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('Database connection successful!');
    connection.release();
  }
});

// 使用 CORS 和 Body Parser
app.use(cors());
app.use(bodyParser.json());

// 使用用户路由和文章路由 （这里有顺序影响）
// app.use(verifyToken); // 在这里是全局使用验证中间件
app.use(userRoutes);
app.use(articleRoutes);
app.use(categoryRoutes);


// 启动服务器
app.listen(3000, () => {
  console.log('AYWEBJS Server is running at http://localhost:3000');
});




// app.use(verifyToken); // 在这里是全局使用验证中间件，该中间件应在文章路由之前使用，以确保只有带有有效令牌的请求才能访问文章。// 所以，这里不应再全局使用 verifyToken 中间件，加入在 routes/article.routes.js 中。
// 在这里，中间件的顺序是有影响的。由于Express中间件是按照它们添加的顺序依次执行的，所以中间件的顺序会影响它们的执行顺序。
// 所以，正确的顺序应该是：
// 使用verifyToken中间件，对所有需要验证的请求进行JWT验证。
// 使用userRoutes和articleRoutes，处理经过验证的请求。
// 确保在使用verifyToken中间件时放在其他路由之前，以确保所有需要验证的请求都经过验证后再进行下一步的处理。这样可以确保只有携带有效令牌的请求才能访问受保护的资源，保障安全性。