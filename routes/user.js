const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.route('/')
  .get(async (req, res, next) => {
    try {
      const user = await User.findAll()
      res.json(user)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })
  .post(async (req, res, next) => {
    try {
      const { userid, name, birth, sex, phone, email, password } = req.body
      const user = await User.create({
        userid,
        name,
        birth,
        sex,
        phone,
        email,
        password
      })
      console.log(user)
      res.status(201).json(user)
    } catch(err) {
      console.error(err)
      next(err)
    }
  })

  module.exports = router