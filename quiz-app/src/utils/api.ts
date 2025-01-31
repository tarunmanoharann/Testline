import { QuizData } from '../types/quizTypes';


// export const fetchQuizData = async (): Promise<QuizData> => {
//   try {
//     const response = await fetch('/quizData.json');
//     if (!response.ok) {
//       throw new Error('Failed to fetch quiz data');
//     }
//     return response.json();
//   } catch (error) {
//     console.error('Error fetching quiz data:', error);
//     throw error;
//   }
// };


export const fetchQuizData = async (): Promise<QuizData> => {
  try {
    const response = await fetch('http://localhost:5000/api/quiz');
    if (!response.ok) {
      throw new Error('Failed to fetch quiz data');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching quiz data:', error);
    throw error;
  }
};