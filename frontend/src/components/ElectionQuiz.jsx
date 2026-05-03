/* eslint-disable */
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const ElectionQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = () => {
    api.get('/api/quiz/questions')
      .then(res => {
        setQuestions(res.data);
        resetQuiz();
      })
      .catch(err => console.error(err));
  };

  const resetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setResult(null);
    setScore(0);
    setIsFinished(false);
  };

  const handleSelect = (index) => {
    if (result) return;
    setSelectedOption(index);
  };

  const handleSubmit = async () => {
    if (selectedOption === null) return;
    
    try {
      const q = questions[currentIndex];
      const res = await api.post('/api/quiz/check', {
        questionId: q.id,
        answer: selectedOption
      });
      setResult(res.data);
      if (res.data.correct) {
        setScore(prev => prev + 1);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
    } else {
      setSelectedOption(null);
      setResult(null);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  if (questions.length === 0) return null;

  return (
    <section className="py-xl">
      <div className="mb-xl text-center">
        <h2 className="font-h2 text-h2 mb-sm">Test Your Knowledge</h2>
        <p className="font-body-md text-outline">Test your knowledge of the democratic process</p>
      </div>
      
      <div className="educational-card max-w-2xl mx-auto p-lg">
        {isFinished ? (
          <div className="text-center py-xl">
            <div className="text-6xl mb-md">🏆</div>
            <h3 className="font-h3 text-h3 text-[#1D9E75] mb-md">Quiz Completed!</h3>
            <div className="bg-teal-light p-md rounded-lg mb-lg">
              <p className="text-teal-primary font-bold text-sm uppercase tracking-widest mb-1">Your Civic Level</p>
              <p className="text-2xl font-h2 text-on-background">
                {score === questions.length ? '🎓 Constitutional Expert' : 
                 score > questions.length * 0.7 ? '🏅 Informed Citizen' : 
                 score > questions.length * 0.4 ? '📜 Aspiring Voter' : '📚 Student of Democracy'}
              </p>
            </div>
            <p className="font-body-lg text-outline mb-lg">
              You scored <strong className="text-on-background">{score}</strong> out of <strong className="text-on-background">{questions.length}</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-[#1D9E75] text-[#1D9E75] px-lg py-md rounded-lg font-button hover:bg-teal-light transition-colors flex items-center justify-center gap-2" onClick={resetQuiz}>
                <span className="material-symbols-outlined text-sm">refresh</span> Try Again
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress and Score Header */}
            <div className="flex justify-between items-center mb-md text-outline font-button text-sm">
              <span>Question {currentIndex + 1} of {questions.length}</span>
              <span className="bg-teal-light text-teal-primary px-3 py-1 rounded-full">
                Score: {score}/{questions.length}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-surface-container rounded-full mb-lg overflow-hidden">
              <div className="h-full bg-teal-primary transition-all duration-300" style={{ width: `${((currentIndex) / questions.length) * 100}%` }}></div>
            </div>

            <h3 className="font-h3 text-xl mb-lg text-on-background">
              {questions[currentIndex].question}
            </h3>
            
            <div className="flex flex-col gap-3 mb-lg">
              {questions[currentIndex].options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                const isSubmitted = result !== null;
                
                let bgCol = 'bg-white';
                let borderCol = 'border-[#E2E8F0]';
                let textCol = 'text-on-background';

                if (isSelected && !isSubmitted) {
                  bgCol = 'bg-teal-light';
                  borderCol = 'border-teal-primary';
                } else if (isSubmitted && isSelected) {
                  bgCol = result.correct ? 'bg-[#d4edda]' : 'bg-[#f8d7da]';
                  borderCol = result.correct ? 'border-[#28a745]' : 'border-[#dc3545]';
                  textCol = result.correct ? 'text-[#155724]' : 'text-[#721c24]';
                }

                return (
                  <button 
                    key={idx} 
                    onClick={() => handleSelect(idx)}
                    disabled={isSubmitted}
                    className={`w-full flex items-center p-md rounded-lg border text-left transition-all ${bgCol} ${borderCol} ${textCol} ${!isSubmitted && 'hover:border-[#1D9E75] cursor-pointer'}`}
                  >
                    <div className={`w-6 h-6 rounded-full border flex items-center justify-center mr-4 flex-shrink-0 ${isSelected ? borderCol + ' ' + bgCol : 'border-outline-variant bg-transparent'}`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                    </div>
                    <span className="font-body-md">{opt}</span>
                  </button>
                );
              })}
            </div>

            {!result ? (
              <button 
                className="w-full bg-[#1D9E75] text-white py-md rounded-lg font-button hover:bg-[#0F6E56] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSubmit}
                disabled={selectedOption === null}
              >
                Submit Answer
              </button>
            ) : (
              <div className="mt-lg animate-fade-in">
                <div className={`flex items-center gap-2 mb-md text-lg font-bold ${result.correct ? 'text-[#28a745]' : 'text-[#dc3545]'}`}>
                  <span className="material-symbols-outlined">{result.correct ? 'check_circle' : 'cancel'}</span>
                  {result.correct ? 'Correct Answer!' : 'Incorrect'}
                </div>
                <div className={`bg-white border-l-4 p-md rounded-r-lg font-body-sm text-outline mb-lg shadow-sm ${result.correct ? 'border-[#28a745]' : 'border-[#dc3545]'}`}>
                  {result.explanation}
                </div>
                <button className="w-full bg-[#1D9E75] text-white py-md rounded-lg font-button hover:bg-[#0F6E56] transition-colors" onClick={handleNext}>
                  {currentIndex === questions.length - 1 ? 'See Final Score' : 'Next Question'}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default ElectionQuiz;
