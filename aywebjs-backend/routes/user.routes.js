// # 5 这是用户相关路由的配置文件，包含用户注册和登录的路由。


// routes/user.routes.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../handlers/user.handler');

router.post('/register', register);
router.post('/login', login);

module.exports = router;
