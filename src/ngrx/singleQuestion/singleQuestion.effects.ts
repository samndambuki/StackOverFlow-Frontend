import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as SingleQuestionActions from './singleQuestion.actions';
import { SingleQuestionService } from 'src/services/singleQuestion/singleQuestionService';

@Injectable()
export class SingleQuestionEffects {

  token = localStorage.getItem('token')!

  loadAnswersByQuestionId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SingleQuestionActions.loadAnswersByQuestionId),
      switchMap(({ questionId }) =>
        this.singleQuestionService.getAnswersByQuestionId(questionId,this.token).pipe(
          map((answers) =>
            SingleQuestionActions.loadAnswersByQuestionIdSuccess({ answers })
          ),
          catchError((error) =>
            of(SingleQuestionActions.loadAnswersByQuestionIdFailure({ error: error.message }))
          )
        )
      )
    )
  );

  postAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SingleQuestionActions.postAnswer),
      switchMap(({ questionId, answer }) =>
        this.singleQuestionService.postAnswer(questionId, answer,this.token).pipe(
          map((response) => SingleQuestionActions.postAnswerSuccess({ response })),
          catchError((error) =>
            of(SingleQuestionActions.postAnswerFailure({ error: error.message }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private singleQuestionService: SingleQuestionService
  ) {}
}
