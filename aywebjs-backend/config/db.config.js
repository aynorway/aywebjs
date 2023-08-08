// # 2 在config文件夹下创建两个配置文件，一个用于数据库配置，一个用于JWT的配置。


// config/db.config.js
require('dotenv').config()

module.exports = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT
};



//你可以使用dotenv库在你的项目中加载这个.env文件。只需运行 npm install dotenv，然后在你的server.js文件顶部加入 require('dotenv').config()。

