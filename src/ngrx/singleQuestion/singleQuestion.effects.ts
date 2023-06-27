import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as singleQuestionActions from './singleQuestion.actions';
import { singleQuestionService } from 'src/services/singleQuestion/singleQuestionService';
import { postAnswerResponse } from 'src/interfaces/singlequestion/postAnswerResponse';
import { upVoteAnswerResponse } from 'src/interfaces/singlequestion/upVoteAnswerResponse';
import { downVoteAnswerResponse } from 'src/interfaces/singlequestion/downVoteAnswerResponse';

@Injectable()
export class SingleQuestionEffects {
    constructor(
        private actions$: Actions,
        private singlequestionService: singleQuestionService
      ) {}

  loadQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleQuestionActions.loadQuestion),
      mergeMap(({ questionId }) =>
        this.singlequestionService.getQuestionById(questionId).pipe(
          map((question) => singleQuestionActions.loadQuestionSuccess({ question })),
          catchError((error) => of(singleQuestionActions.loadQuestionFailure({ error })))
        )
      )
    )
  );

  addAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleQuestionActions.addAnswer),
      mergeMap(({ questionId, answer }) =>
        this.singlequestionService.postAnswer(questionId, answer).pipe(
          map((response: postAnswerResponse) => singleQuestionActions.addAnswerSuccess({response})),
          catchError((error) => of(singleQuestionActions.addAnswerFailure({ error })))
        )
      )
    )
  );

  upvoteAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleQuestionActions.upvoteAnswer),
      mergeMap(({ answerId }) =>
        this.singlequestionService.upvoteAnswer(answerId).pipe(
          map((response:upVoteAnswerResponse) => singleQuestionActions.upvoteAnswerSuccess({response})),
          catchError((error) => of(singleQuestionActions.upvoteAnswerFailure({ error })))
        )
      )
    )
  );

  downvoteAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleQuestionActions.downvoteAnswer),
      mergeMap(({ answerId }) =>
        this.singlequestionService.downvoteAnswer(answerId).pipe(
          map((response:downVoteAnswerResponse) => singleQuestionActions.downvoteAnswerSuccess({response})),
          catchError((error) => of(singleQuestionActions.downvoteAnswerFailure({ error })))
        )
      )
    )
  );

  getAnswerById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(singleQuestionActions.getAnswerById),
      mergeMap(({ answerId }) =>
        this.singlequestionService.getAnswerById(answerId).pipe(
          map((answer) => singleQuestionActions.getAnswerByIdSuccess({ answer })),
          catchError((error) => of(singleQuestionActions.getAnswerByIdFailure({ error })))
        )
      )
    )
  );


}
