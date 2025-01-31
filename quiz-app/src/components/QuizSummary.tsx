import React from 'react';

interface QuizSummaryProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ score, totalQuestions, onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl font-bold text-white mb-4">Quiz Summary</h1>
      <p className="text-white mb-6">
        You scored {score} out of {totalQuestions}!
      </p>
      <button
        onClick={onRestart}
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-blue-100 transition duration-300"
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default QuizSummary;