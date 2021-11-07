//引用 Express及 Express路由器
const express = require('express')
const router = express.Router()

//載入資料庫
const db = require('../../models')
const Todo = db.Todo

//設定 New 頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

//設定 Create 路由
router.post('/', (req, res) => {
  const userId = req.user._id
  const name = req.body.name
  return Todo.create({ name, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})

//設定 detail 路由
router.get('/:id', (req, res) => {
  const UserId = req.user.id
  const id = req.params.id
  return Todo.findOne({
    where: { id, UserId }
  })
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})

module.exports = router