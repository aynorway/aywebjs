//  # 6 这是文章相关路由的配置文件，包含获取文章的路由。


// routes/article.routes.js
const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');  // 导入 verifyToken 中间件
const { getArticles, createArticle } = require('../handlers/article.handler'); // 导入 getArticles 和 createArticle

router.get('/articles', verifyToken, getArticles);  // 先使用 verifyToken 中间件，然后再使用 getArticles 处理器
router.post('/article', verifyToken, createArticle);  // 添加一个 POST 路由用于创建文章

module.exports = router;


// 只有请求 /articles 路由时，verifyToken 中间件才会被执行，而请求 /register 或 /login 路由时，verifyToken 中间件则不会被执行。这样就解决了你的问题，即用户在注册时还没有 token 可供验证。



// // routes/article.routes.js
// const express = require('express');
// const router = express.Router();
// const { getArticles } = require('../handlers/article.handler');

// router.get('/articles', getArticles);

// module.exports = router;
