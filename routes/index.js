//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//引入 middleware
const { authenticator } = require('../middleware/auth')

//引入 home 模組程式碼
const home = require('./modules/home')

//引入 todos 模組程式碼
const todos = require('./modules/todos')

//引入 users 模組程式碼
const users = require('./modules/users')

//將網址結構符合 /todos 字串的request 導向 todos 模組並加入驗證程序
router.use('/todos', authenticator, todos)

//將網址結構符合 /users 字串的request 導向 users 模組
router.use('/users', users)

//將網址結構符合 / 字串的request 導向 home 模組並加入驗證程序
router.use('/', authenticator, home)

//匯出路由器
module.exports = router