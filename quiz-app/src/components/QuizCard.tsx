import React, { useState, useEffect } from 'react';
import { QuizQuestion } from '../types/quizTypes';

interface QuizCardProps {
  question: QuizQuestion;
  onAnswer: (isCorrect: boolean) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ question, onAnswer }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Reset feedback when the question changes
  useEffect(() => {
    setSelectedOptionId(null);
    setShowFeedback(false);
  }, [question]);

  const handleOptionClick = (optionId: number, isCorrect: boolean) => {
    if (!showFeedback) {
      setSelectedOptionId(optionId);
      setShowFeedback(true);
      onAnswer(isCorrect);
    }
  };

  const getOptionColor = (optionId: number, isCorrect: boolean) => {
    if (showFeedback) {
      if (optionId === selectedOptionId) {
        return isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white';
      }
      if (isCorrect) {
        return 'bg-green-500 text-white';
      }
    }
    return 'bg-gray-100 hover:bg-gray-200';
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 className="text-xl font-semibold mb-4">{question.description}</h2>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id, option.is_correct)}
            className={`w-full px-4 py-2 rounded-lg transition duration-300 ${getOptionColor(
              option.id,
              option.is_correct
            )}`}
            disabled={showFeedback}
          >
            {option.description}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;