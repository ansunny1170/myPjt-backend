const express = require('express')
const app = express()

app.set('port', 3000)
app.get('/',(req,res)=> {
  //'/'저 주소로 get을 처리하겠다.
  res.send('Hello, Express')
}) 
const port = app.get('port')
app.listen(port, () => {
  console.log(port, '번 포트에서 서버 실행 중')
})