const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// 게시물 생성
router.post('/create', async (req, res) => {
  try {
    const { title, content, author } = req.body;
    const post = new Post({ title, content, author });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;