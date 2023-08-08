
<!-- README.md -->
# AYWEBJS 项目文件说明
本项目主要由以下文件构成：

## 1. .env
这是一个环境变量配置文件，其中包含了数据库配置和 JWT 的秘钥等敏感信息。
## 2. config/db.config.js
此文件是数据库配置文件，其中的配置信息从 .env 文件中获取。
## 3. config/jwt.config.js
此文件是 JWT（Json Web Token）的配置文件，其中的配置信息从 .env 文件中获取。
## 4. utils/db.utils.js
此文件用于创建和管理 MySQL 数据库的连接池。
## 5. routes/user.routes.js
这是用户相关路由的配置文件，包含用户注册和登录的路由。
## 6. routes/article.routes.js
这是文章相关路由的配置文件，包含获取文章的路由。
## 7. models/user.model.js
这是用户模型文件，包含与用户相关的数据库操作，如创建新用户和通过用户名获取用户。
## 8. models/article.model.js
这是文章模型文件，包含与文章相关的数据库操作，如根据用户级别获取文章。
## 9. handlers/user.handler.js
这是用户处理器文件，其中包含处理用户注册和登录请求的函数。
## 10. handlers/article.handler.js
这是文章处理器文件，其中包含处理获取文章请求的函数。
## 11. middlewares/verifyToken.js
这是一个中间件文件，其中包含一个函数用于验证请求中的 JWT token。
## 12. server.js
这是项目的入口文件，它设置了 Express 应用、数据库连接测试、CORS 和 Body Parser 的使用，以及用户和文章路由的使用。此文件也负责启动服务器。
## 13 scripts/userManagement.js
用来插入新用户和修改用户级别。
## 14 models/category.model.js
文件包含与Category表相关的数据库操作代码。
## 15 handlers/category.handler.js
这个文件会处理与Category相关的HTTP请求并返回响应。
## 16 routes/category.routes.js
这个文件会配置与Category相关的路由。


## 其他
- package.json: 这个文件包含了项目的 npm 配置，包括项目的依赖和脚本等。
