const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/:newsId', commentController.getCommentsByNewsId);
router.post('/:newsId', authMiddleware, commentController.createComment);

module.exports = router;