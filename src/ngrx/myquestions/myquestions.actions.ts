import { createAction, props } from '@ngrx/store';
import { Question } from 'src/interfaces/ask question/question.interface';
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

export const loadQuestionById = createAction(
  '[My Questions] Load Question By Id',
  props<{ questionId: string }>()
);


export const loadQuestionByIdSuccess = createAction(
  '[My Questions/API] Load Question By Id Success',
  props<{ question: Question }>()
);


export const loadQuestionByIdFailure = createAction(
  '[My Questions/API] Load Question By Id Failure',
  props<{ error: any }>()
);


