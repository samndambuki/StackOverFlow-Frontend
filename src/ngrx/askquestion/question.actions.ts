import { createAction, props } from '@ngrx/store';
import { Question } from 'src/interfaces/question/question.interface';
import { QuestionResponse } from 'src/interfaces/question/questionResponse';

export const askQuestion = createAction('[Question] Ask Question', props<{ question: Question, token: string | null }>());
export const askQuestionSuccess = createAction('[Question] Ask Question Success', props<{ response: QuestionResponse }>());
export const askQuestionFailure = createAction('[Question] Ask Question Failure', props<{ error: string }>());
