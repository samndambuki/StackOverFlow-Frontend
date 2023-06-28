import { createAction, props } from '@ngrx/store';
import { Question } from 'src/interfaces/ask question/question.interface';

export const updateQuestion = createAction(
  '[Question] Update Question',
  props<{ questionId: string, question: Question }>()
);

export const updateQuestionSuccess = createAction(
  '[Question] Update Question Success'
);

export const updateQuestionFailure = createAction(
  '[Question] Update Question Failure',
  props<{ error: any }>()
);

