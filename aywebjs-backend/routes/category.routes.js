// # 16 这个文件会配置与Category相关的路由。

// routes/category.routes.js
const express = require('express');
const router = express.Router();
const { createCategory, getCategory, getCategories } = require('../handlers/category.handler');
const verifyToken = require('../middlewares/verifyToken');  // 导入 verifyToken 中间件

router.post('/category', verifyToken, createCategory);
router.get('/category/:id', verifyToken, getCategory);
router.get('/categories', verifyToken, getCategories);

module.exports = router;
