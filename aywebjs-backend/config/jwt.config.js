// # 3 在config文件夹下创建两个配置文件，一个用于数据库配置，一个用于JWT的配置。

// config/jwt.config.js
require('dotenv').config()

module.exports = {
secret: process.env.JWT_SECRET, // 从.env文件获取JWT密钥
expiresIn: 86400 // Token过期时间
};

