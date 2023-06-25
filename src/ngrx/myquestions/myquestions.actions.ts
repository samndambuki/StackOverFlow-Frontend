import { createAction, props } from '@ngrx/store';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';


export const loadMyQuestions = createAction('[My Questions] Load My Questions');
export const loadMyQuestionsSuccess = createAction(
  '[My Questions] Load My Questions Success',
  props<{ questions: GetQuestions[] }>()
);
export const loadMyQuestionsFailure = createAction(
  '[My Questions] Load My Questions Failure',
  props<{ error: string }>()
);
