// # 9 然后在handlers目录中创建user.handler.js和article.handler.js文件，这些文件将处理HTTP请求并返回响应。


// handlers/user.handler.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userModel = require('../models/user.model');
const jwtConfig = require('../config/jwt.config');

exports.register = async (req, res) => {
  const { username, password, firstName, lastName } = req.body;

  try {
    await userModel.createUser(username, password, firstName, lastName);
    res.status(200).send({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.getUserByUsername(username);

    if (!user) {
        return res.status(404).send({ message: 'User not found' });
    }

    // Show message when the user is found
    console.log('User found:', user);

    const passwordIsValid = bcrypt.compareSync(password, user.password_hash);

    if (!passwordIsValid) {
      return res.status(401).send({ auth: false, message: 'Invalid password', token: null }); // 这里添加了错误消息 'Invalid password'
    } else {
      const token = jwt.sign({ id: user.id, level: user.level }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn // expires in 24 hours
      });

      res.status(200).send({ auth: true, token });
    }
  } catch (error) {
    res.status(500).send({ error: error.message }); // 为了清晰地显示错误，改成了 error: error.message
  }
};



// 以上更改的地方在于，当密码不匹配时，返回的消息现在会明确地指出密码无效，而不是之前的 "Null"。另外，当捕获到错误时，我们发送错误的消息而不是整个错误对象，这可能会使错误信息更清晰。

// 为了处理你的新需求——用户每次登录时，如果密码正确，系统就自动生成 token，你的现有代码已经处理了这个逻辑。只要用户提供的用户名和密码匹配，你的代码就会生成一个新的JWT令牌并将其返回给客户端。你可以在登录后将这个令牌保存在客户端，并在后续的 API 请求中使用它。






/*     const passwordIsValid = bcrypt.compareSync(password, user.password_hash);

    if (!passwordIsValid) {
      res.status(401).send({ auth: false, token: null });
    } else {
      const token = jwt.sign({ id: user.id, level: user.level }, jwtConfig.secret, {
        expiresIn: jwtConfig.expiresIn // expires in 24 hours
      });

      res.status(200).send({ auth: true, token });
    }
  } catch (error) {
    res.status(500).send({ error });
  }
}; */




// handlers/user.handler.js

// const jwtConfig = require('../config/jwt.config');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const db = require('../utils/db.utils');

// const register = async (req, res) => {
//   // ... 实现注册功能的代码...
// };

// const login = (req, res) => {
//   // ... 实现登录功能的代码...
// };

// module.exports = {
//   register,
//   login
// };

