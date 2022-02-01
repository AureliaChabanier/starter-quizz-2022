import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

 export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };

export const QUESTION_SPORT: Question = {
  label: 'Beach volley ou natation?',
  answers: [
    {
      value: 'Beach volley',
      isCorrect: false,
    },
    {
      value: 'Natation',
      isCorrect: true,
    }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Animaux', // What's happening if I change this value..?
        theme: 'Animal',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sports',
        theme: 'Plage',
        questions: [QUESTION_SPORT],
    }
];
