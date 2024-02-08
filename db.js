// const mongoose = require('mongoose');
// 
// // MongoDB 연결
// mongoose.connect('mongodb://localhost:27017/board_db', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB에 연결되었습니다.'))
// .catch(err => console.error('MongoDB 연결 중 오류 발생:', err));
// 
// module.exports = mongoose;

var mysql = require('mysql');

var db = mysql.createConnection({
  host : '호스트주소',
  user : '유저',
  password : '비밀번호',
  database : 'DB',
  dataStrings: 'date',

});
db.connect();

module.exports = db;