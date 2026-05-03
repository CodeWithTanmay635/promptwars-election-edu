const aiService = require('../services/aiService');
const dataService = require('../services/dataService');

const handleChat = async (req, res, next) => {
  try {
    const { message, history } = req.body;
    const response = await aiService.sendMessage(message, history);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

const getTopics = (req, res, next) => {
  try {
    const topics = dataService.getTopics();
    res.json(topics);
  } catch (error) {
    next(error);
  }
};

const getTimeline = (req, res, next) => {
  try {
    const timeline = dataService.getTimeline();
    res.json(timeline);
  } catch (error) {
    next(error);
  }
};

const checkQuizAnswer = (req, res, next) => {
  try {
    const { questionId, answer } = req.body;
    const result = dataService.checkQuizAnswer(questionId, answer);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getQuizQuestions = (req, res, next) => {
  try {
    const questions = dataService.getQuizQuestions();
    res.json(questions);
  } catch (error) {
    next(error);
  }
};

const getTopicSummary = async (req, res, next) => {
  try {
    const topicId = req.params.id;
    const topics = dataService.getTopics();
    const topic = topics.find(t => t.id === topicId);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    const response = await aiService.getTopicSummary(topic.title);
    res.json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleChat,
  getTopics,
  getTimeline,
  checkQuizAnswer,
  getQuizQuestions,
  getTopicSummary
};
