const express = require('express');
const app = express();


// EJS를 사용하기 위한 설정
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // views 디렉토리 설정

// 루트 경로에서 index.ejs를 렌더링
app.get('/', (req, res) => {
  res.render('index'); // views 디렉토리의 index.ejs 파일 렌더링
});

// 서버 시작
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});