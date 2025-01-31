import React, { useState, useEffect } from 'react';
import QuizCard from '../components/QuizCard';
import QuizSummary from '../components/QuizSummary';
import ProgressBar from '../components/Progressbar';
import { fetchQuizData } from '../utils/api';
import { QuizData, QuizQuestion } from '../types/quizTypes';

const Quiz: React.FC = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      }
    };
    loadQuizData();
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setTimeout(() => {
      if (currentQuestionIndex + 1 < (quizData?.questions.length || 0)) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setShowSummary(true);
      }
    }, 1000); // Delay for 1 second to show feedback
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowSummary(false);
  };

  if (!quizData) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (showSummary) {
    return (
      <QuizSummary
        score={score}
        totalQuestions={quizData.questions.length}
        onRestart={handleRestart}
      />
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <ProgressBar current={currentQuestionIndex + 1} total={quizData.questions.length} />
      <QuizCard question={currentQuestion} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;