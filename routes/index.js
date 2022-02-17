const express = require('express')
const User = require('../models/user')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    // const user = await User.findAll()
    res.send('Hello myPjt server')
  } catch(err) {
    console.error(err)
    next(err)
  }
  
})

module.exports = router