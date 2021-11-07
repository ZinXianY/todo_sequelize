//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//載入資料庫
const db = require('../../models')
const Todo = db.Todo

//設定首頁路由
router.get('/', (req, res) => {
  return Todo.findAll({
    raw: true,
    nest: true
  })
    .then(todos => res.render('index', { todos }))
    .catch(error => console.log(error))
})

//匯出路由器
module.exports = router