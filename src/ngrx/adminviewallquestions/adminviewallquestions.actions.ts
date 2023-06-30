import { createAction, props } from '@ngrx/store';
import { AdminViewAllQuestions } from 'src/interfaces/adminviewallquestions/adminviewallquestions';

export const loadQuestions = createAction(
  '[Admin View All Questions] Load Questions'
);

export const loadQuestionsSuccess = createAction(
  '[Admin View All Questions] Load Questions Success',
  props<{ questions: AdminViewAllQuestions[] }>()
);

export const loadQuestionsFailure = createAction(
  '[Admin View All Questions] Load Questions Failure',
  props<{ error: any }>()
);

export const deleteQuestion = createAction(
  '[Admin View All Questions] Delete Question',
  props<{ questionId: string }>()
);

export const deleteQuestionSuccess = createAction(
  '[Admin View All Questions] Delete Question Success',
  props<{ questionId: string }>()
);

export const deleteQuestionFailure = createAction(
  '[Admin View All Questions] Delete Question Failure',
  props<{ error: any }>()
);
