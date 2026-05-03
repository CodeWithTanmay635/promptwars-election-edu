import React from 'react';
import ElectionQuiz from '../components/ElectionQuiz';
import { Link } from 'react-router-dom';

const QuizPage = () => {
  return (
    <div className="py-xl">
      <Link to="/" className="inline-flex items-center text-teal-primary hover:underline mb-lg font-button">
        <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Home
      </Link>
      <ElectionQuiz />
    </div>
  );
};

export default QuizPage;
