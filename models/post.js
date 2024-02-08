const mongoose = require('mongoose');

// 게시물 스키마 정의
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' // 사용자 모델과의 관계 설정
  },
  createdAt: { type: Date, default: Date.now },
});

// 게시물 모델 생성
const Post = mongoose.model('Post', postSchema);

module.exports = Post;