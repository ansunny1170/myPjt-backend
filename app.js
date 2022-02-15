const express = require('express')
const path = require('path')
const morgan = require('morgan')
// const nunjucks = require('nunjucks');

const { sequelize } = require('./models')

const app = express()

app.set('port', process.env.PORT || 3000)
// app.set('view engine', 'html')
// nunjucks.configure('views', {
//   express: app,
//   watch: true,
// });

// db.sequelize를 불러와 sync 메서드를 사용해 서버 실행 시 DB와 연동되도록 함
// config/config.json에서 연결 속성 수정할 것.
// force:false 에서 true 시, 서버 실행 시마다 테이블을 재생성 한다.
// 테이블을 잘못 만들었을 경우 true한다.
sequelize.sync({ force:false })
.then(() => {
  console.log('데이터베이스 연결 성공')
})
.catch((err) => {
  console.error(err)
})

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !=='production' ? err : {};
  res.status(err.status || 500);
  res.render('error')
})

app.get('/', (req, res) => {
  res.send('Hello, Express')
})

app.listen(app.get('port'), () => {
  console.log(app.get('port'), ' 번 포트에서 대기 중')
})

// const express = require('express')
// const path = require('path')
// const morgan = require('morgan')

// const { sequelize } = require('./models')

// const app = express()

// app.set('port', process.env.PORT || 3000)

// sequelize.sync({force: false})
//   .then(() => {
//     console.log("데이터 베이스 연결 성공")
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// app.use(morgan('dev'))
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false}))

// app.use((req, res, next) => {
//   const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
//   error.status = 404
//   next(error)
// })

// app.use((err, req, res, next) => {
//   res.locals.message = err.message
//   res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}
//   res.status(err.status || 500)
//   res.render('error')
// })

// app.listen(app.get('port'), () => {
//   console.log(app.get('port'), '번 포트에서 대기중!')
// })