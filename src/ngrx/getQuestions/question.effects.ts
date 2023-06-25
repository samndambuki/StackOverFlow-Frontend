import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { QuestionService } from 'src/services/questions/question.service';
import * as QuestionActions from './question.actions';

@Injectable()
export class QuestionEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}

  getQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuestionActions.getQuestions),
      switchMap(() =>
        this.questionService.getQuestions().pipe(
          map((questions) =>
            QuestionActions.getQuestionsSuccess({ questions })
          ),
          catchError((error) =>
            of(QuestionActions.getQuestionsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
