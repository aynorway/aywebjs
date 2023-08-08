// # 13 scripts/userManagement.js，用来插入新用户和修改用户级别。

// scripts/userManagement.js
const bcrypt = require('bcrypt');
const db = require('../utils/db.utils');
require('dotenv').config()

const createUser = async (username, password, firstName, lastName, level = 1) => {
  const salt = bcrypt.genSaltSync(10);
  const passwordHash = bcrypt.hashSync(password, salt);

  const query = 'INSERT INTO User (username, password_hash, salt, level, first_name, last_name) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [username, passwordHash, salt, level, firstName, lastName];

  return new Promise((resolve, reject) => {
    db.query(query, values, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const changeUserLevel = async (username, level) => {
  const query = 'UPDATE User SET level = ? WHERE username = ?';
  const values = [level, username];

  return new Promise((resolve, reject) => {
    db.query(query, values, function(error, results, fields) {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};

const username = process.argv[2];
const password = process.argv[3];
const firstName = process.argv[4];
const lastName = process.argv[5];
const level = process.argv[6];

if (password !== 'null') {
  createUser(username, password, firstName, lastName, level)
    .then(() => {
      console.log('User created successfully.');
      process.exit(); // 添加退出逻辑
    })
    .catch((error) => {
      console.error('An error occurred:', error.message);
      process.exit(1); // 添加退出逻辑，传递非零值表示出错
    });
} else {
  changeUserLevel(username, level)
    .then(() => {
      console.log('User level changed successfully.');
      process.exit(); // 添加退出逻辑
    })
    .catch((error) => {
      console.error('An error occurred:', error.message);
      process.exit(1); // 添加退出逻辑，传递非零值表示出错
    });
}





/* 
在这个脚本中，我们首先导入bcrypt和我们的数据库连接。然后，我们定义了两个函数：createUser和changeUserLevel。createUser函数接受用户名、密码、全名和级别作为参数，并将新用户插入到数据库中。密码在插入数据库前使用bcrypt进行了哈希。如果未提供级别，默认为1。changeUserLevel函数接受用户名和级别作为参数，并将数据库中相应用户的级别更新为提供的级别。

然后，我们从命令行参数中获取用户名、密码、全名和级别。如果提供了密码，我们假定用户想要创建一个新用户，并调用createUser函数。如果没有提供密码，我们假定用户想要更改一个已有用户的级别，并调用changeUserLevel函数。

在运行这个脚本时，你需要在命令行中提供相应的参数。例如，要创建一个新用户，你可以运行： 
➜  aywebjs node scripts/userManagement.js newusername newpassword "Full Name" 2

node scripts/userManagement.js admin@gmail.com password "Admin" "User" 3
node scripts/userManagement.js john.doe@gmail.com password "John" "Doe" 2
node scripts/userManagement.js jane.doe@gmail.com password "Jane" "Doe" 1



要更改一个已有用户的级别，你可以运行：
➜  aywebjs node scripts/userManagement.js existingusername null null 3
node scripts/userManagement.js postman1@gmail.com null null 3

*/


// 还没有做保密处理！！！！！！！！！！！！！！！！！！！！！！！！谁都能改。