import { createAction, props } from '@ngrx/store';
import { getAnswerByQuestionId } from 'src/interfaces/singlequestion/getAnswerByQuestionIdResponse';
import { postAnswerRequest } from 'src/interfaces/singlequestion/postAnswer';
import { postAnswerResponse } from 'src/interfaces/singlequestion/postAnswerResponse';

// Load answers by question ID
export const loadAnswersByQuestionId = createAction(
  '[SingleQuestion] Load Answers By Question ID',
  props<{ questionId: string }>()
);

export const loadAnswersByQuestionIdSuccess = createAction(
  '[SingleQuestion] Load Answers By Question ID Success',
  props<{ answers: getAnswerByQuestionId[] }>()
);

export const loadAnswersByQuestionIdFailure = createAction(
  '[SingleQuestion] Load Answers By Question ID Failure',
  props<{ error: string }>()
);

// Post an answer
export const postAnswer = createAction(
  '[SingleQuestion] Post Answer',
  props<{ questionId: string; answer: postAnswerRequest }>()
);

export const postAnswerSuccess = createAction(
  '[SingleQuestion] Post Answer Success',
  props<{ response: postAnswerResponse }>()
);

export const postAnswerFailure = createAction(
  '[SingleQuestion] Post Answer Failure',
  props<{ error: string }>()
);


export const getAnswersByQuestionId = createAction(
  '[SingleQuestion] Get Answers By Question ID',
  props<{ questionId: string,answers: getAnswerByQuestionId[] }>()
);

export const getAnswersByQuestionIdSuccess = createAction(
  '[SingleQuestion] Get Answers By Question ID Success',
  props<{ answers: getAnswerByQuestionId[] }>()
);

export const getAnswersByQuestionIdFailure = createAction(
  '[SingleQuestion] Get Answers By Question ID Failure',
  props<{ error: string }>()
);







