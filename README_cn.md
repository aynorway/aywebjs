[English](README.md)

# AYWEBJS

AYWEBJS 是一个使用 React、Node.js 和 MySQL 构建的全栈网站。该项目展示了多篇文章，并允许根据用户等级访问不同的文章。网站左侧有一个侧边栏，可以根据设置的文件夹结构列出网站导航和文章的位置。

## 特点

- **关注点分离（Separation of Concerns）**: 通过将路由和处理器分离，实现了代码的模块化，提高了可读性和可维护性。
- **用户权限管理**: 通过 JWT 来验证用户，根据不同的用户等级展示不同的文章。
- **模块化架构**: 遵循模块化原则组织代码，使每个部分的功能清晰，便于测试和复用。

## 数据库结构

### User 表

存储用户信息，包括用户名、密码哈希、盐值、等级、名字和注册日期。

### Category 表

存储文章分类信息，每个分类可以有一个父分类。

### Article 表

存储文章信息，包括标题、分类、所需等级、标签、发布日期、编辑日期、作者和内容。

## 项目结构

```
aywebjs/
├── README.md
├── config
│   ├── db.config.js         // 数据库配置
│   └── jwt.config.js        // JWT 配置
├── handlers
│   ├── article.handler.js   // 文章请求处理
│   ├── category.handler.js  // 分类请求处理
│   └── user.handler.js      // 用户请求处理
├── middlewares
│   └── verifyToken.js       // JWT 验证中间件
├── models
│   ├── article.model.js     // 文章数据库模型
│   ├── category.model.js    // 分类数据库模型
│   └── user.model.js        // 用户数据库模型
├── routes
│   ├── article.routes.js    // 文章路由
│   ├── category.routes.js   // 分类路由
│   └── user.routes.js       // 用户路由
├── scripts
│   └── userManagement.js    // 用户管理脚本
├── server.js                // 服务器启动文件
└── utils
    └── db.utils.js          // 数据库连接池
```

## 快速开始

1. **克隆仓库**:

   ```bash
   git clone https://github.com/your-username/aywebjs.git
   ```

2. **安装依赖**:

   ```bash
   cd aywebjs
   npm install
   ```

3. **配置环境变量**:

   在 `.env` 文件中设置数据库和 JWT 的密钥。

4. **启动服务器**:

   ```bash
   npm start
   ```

   服务器将运行在 [http://localhost:3000](http://localhost:3000)。

## 贡献

欢迎提交 issue 和 pull request。

## 许可

此项目遵循 MIT 许可。

