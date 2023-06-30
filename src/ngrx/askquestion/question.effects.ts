import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  askQuestion,
  askQuestionFailure,
  askQuestionSuccess,
} from './question.actions';
import { QuestionService } from 'src/services/questions/question.service';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}

  askQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(askQuestion),
      switchMap(({ question, token }) =>
        this.questionService.askQuestion(question, token || '').pipe(
          map((response) => askQuestionSuccess({ response })),
          catchError((error) =>
            of(askQuestionFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
