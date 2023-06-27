import { createAction, props } from '@ngrx/store';
import { singleQuestion } from 'src/interfaces/singlequestion/singleQuestion';
import { singleQuestionNewAnswer } from 'src/interfaces/singlequestion/NewAnswer';
import { singleQuestionAnswer } from 'src/interfaces/singlequestion/singleQuestionAnswer';
import { postAnswerResponse } from 'src/interfaces/singlequestion/postAnswerResponse';
import { upVoteAnswerResponse } from 'src/interfaces/singlequestion/upVoteAnswerResponse';
import { downVoteAnswerResponse } from 'src/interfaces/singlequestion/downVoteAnswerResponse';

export const loadQuestion = createAction('[Single Question] Load Question', props<{ questionId: string }>());
export const loadQuestionSuccess = createAction('[Single Question] Load Question Success', props<{ question: singleQuestion }>());
export const loadQuestionFailure = createAction('[Single Question] Load Question Failure', props<{ error: any }>());

export const addAnswer = createAction('[Single Question] Add Answer', props<{ questionId: string, answer: singleQuestionNewAnswer }>());
export const addAnswerSuccess = createAction('[Single Question] Add Answer Success', props<{ response: postAnswerResponse }>());
export const addAnswerFailure = createAction('[Single Question] Add Answer Failure', props<{ error: any }>());

export const upvoteAnswer = createAction('[Single Question] Upvote Answer', props<{ answerId: string }>());
export const upvoteAnswerSuccess = createAction('[Single Question] Upvote Answer Success', props<{ response: upVoteAnswerResponse }>());
export const upvoteAnswerFailure = createAction('[Single Question] Upvote Answer Failure', props<{ error: any }>());

export const downvoteAnswer = createAction('[Single Question] Downvote Answer', props<{ answerId: string }>());
export const downvoteAnswerSuccess = createAction('[Single Question] Downvote Answer Success', props<{ response: downVoteAnswerResponse }>());
export const downvoteAnswerFailure = createAction('[Single Question] Downvote Answer Failure', props<{ error: any }>());

export const getAnswerById = createAction('[Single Question] Get Answer By ID', props<{ answerId: string }>());
export const getAnswerByIdSuccess = createAction('[Single Question] Get Answer By ID Success', props<{ answer: singleQuestionAnswer }>());
export const getAnswerByIdFailure = createAction('[Single Question] Get Answer By ID Failure', props<{ error: any }>());
