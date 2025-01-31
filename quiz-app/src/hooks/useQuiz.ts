import { useState, useEffect } from 'react';
import { fetchQuizData } from '../utils/api';
import { QuizData } from '../types/quizTypes';

export const useQuiz = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        const data = await fetchQuizData();
        setQuizData(data);
      } catch (error) {
        console.error('Error fetching quiz data:', error);
      } finally {
        setLoading(false);
      }
    };
    loadQuizData();
  }, []);

  return { quizData, loading };
};