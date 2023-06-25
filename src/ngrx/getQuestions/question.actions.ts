import { createAction, props } from '@ngrx/store';
import { Question } from 'src/interfaces/question/question.interface';

export const getQuestions = createAction('[Question] Get Questions');
export const getQuestionsSuccess = createAction(
  '[Question] Get Questions Success',
  props<{ questions: Question[] }>()
);
export const getQuestionsFailure = createAction(
  '[Question] Get Questions Failure',
  props<{ error: string }>()
);
