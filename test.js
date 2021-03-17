const fs = require("fs");

// 读数据库
//序列化
const usersString = fs.readFileSync("./db/users.json").toString();
//反序列化得到数组
const usersArray = JSON.parse(usersString);


// 写数据库
const user3 = {id:3, name:'tom', password: 'yyy'}
usersArray.push(user3)
//序列化得到字符串
const string = JSON.stringify(usersArray)
fs.writeFileSync('./db/users.json', string)