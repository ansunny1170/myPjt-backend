const Sequelize = require('sequelize');
const User = require('./user')

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env] // __dirname + 
const db = {}

// ↓ 시퀄라이즈 새로 쳐준다
// new Seq...를 통해 DB 연결 객체를 생성한다.
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

// 연결 객체를 나중에 재사용하기 위해 db.sequelize에 추가 
db.sequelize = sequelize;

// db라는 객체에 User 모델 추가
db.User = User; 

// 모델의 static.init 메서드를 호출
User.init(sequelize);

// 다른 테이블과의 관계 연결하는 associate 메서드 실행
// User.associate(db);

// 앞으로 db 객체를 require하여 User 모델에 접근 가능
module.exports = db;
