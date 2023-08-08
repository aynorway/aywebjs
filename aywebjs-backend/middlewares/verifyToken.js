// # 11 在middlewares目录下创建verifyToken.js文件，它将被用来验证请求中的JWT token。


// middlewares/verifyToken.js
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt.config');

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  }

  jwt.verify(token, jwtConfig.secret, function(err, decoded) {
    if (err) {
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }

    // 将用户级别添加到请求对象中
    req.level = decoded.level;

    next();
  });
};

module.exports = verifyToken;
