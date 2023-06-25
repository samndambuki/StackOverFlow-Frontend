import { createAction, props } from '@ngrx/store';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';

// Load Get Questions
export const loadGetQuestions = createAction('[Get Questions] Load Get Questions');

// Load Get Questions Success
export const loadGetQuestionsSuccess = createAction(
  '[Get Questions] Load Get Questions Success',
  props<{ questions: GetQuestions[] }>()
);

// Load Get Questions Failure
export const loadGetQuestionsFailure = createAction(
  '[Get Questions] Load Get Questions Failure',
  props<{ error: string }>()
);
