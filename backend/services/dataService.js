const { TOPICS, TIMELINE, QUIZ_QUESTIONS } = require('../data/electionData');

const getTopics = () => TOPICS;

const getTimeline = () => TIMELINE;

const getQuizQuestions = () => {
  return QUIZ_QUESTIONS.map(q => ({
    id: q.id,
    question: q.question,
    options: q.options,
    topic: q.topic
  }));
};

const checkQuizAnswer = (questionId, userAnswerIndex) => {
  const question = QUIZ_QUESTIONS.find(q => q.id === questionId);
  if (!question) {
    throw new Error('Question not found');
  }
  
  // Convert userAnswer to index if it came as string
  const index = parseInt(userAnswerIndex, 10);
  const isCorrect = question.correct === index;
  
  return {
    correct: isCorrect,
    explanation: question.explanation
  };
};

module.exports = {
  getTopics,
  getTimeline,
  getQuizQuestions,
  checkQuizAnswer
};
