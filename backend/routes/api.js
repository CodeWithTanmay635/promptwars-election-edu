const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const { validateChat, validateQuizCheck } = require('../middleware/validate');

// 1. POST /api/chat — accepts { message, history[] }, calls AI model, returns { reply, sources }
router.post('/chat', validateChat, apiController.handleChat);

// 2. GET /api/topics — returns list of election topics with icons and descriptions
router.get('/topics', apiController.getTopics);
router.get('/topics/:id/summary', apiController.getTopicSummary);

// 3. GET /api/timeline — returns Indian election timeline steps as JSON array
router.get('/timeline', apiController.getTimeline);

// 4. POST /api/quiz/check — accepts { questionId, answer }, returns { correct, explanation }
router.post('/quiz/check', validateQuizCheck, apiController.checkQuizAnswer);

// 5. GET /api/quiz/questions — returns 10 quiz questions about Indian elections
router.get('/quiz/questions', apiController.getQuizQuestions);

module.exports = router;
