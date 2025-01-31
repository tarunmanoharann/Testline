export interface QuizData {
    id: number;
    title: string;
    topic: string;
    questions: QuizQuestion[];
  }
  
  export interface QuizQuestion {
    id: number;
    description: string;
    options: QuizOption[];
  }
  
  export interface QuizOption {
    id: number;
    description: string;
    is_correct: boolean;
  }