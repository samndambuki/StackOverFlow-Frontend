import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as AdminViewAllQuestionsActions from '../adminviewallquestions/adminviewallquestions.actions';
import { AdminViewAllQuestionsService } from 'src/services/adminviewallquestions/adminviewallquestions';

@Injectable()
export class AdminViewAllQuestionsEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminViewAllQuestionsService
  ) {}

  loadQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAllQuestionsActions.loadQuestions),
      mergeMap(() =>
        this.adminService.getAllQuestions().pipe(
          map((questions) =>
            AdminViewAllQuestionsActions.loadQuestionsSuccess({ questions })
          ),
          catchError((error) =>
            of(AdminViewAllQuestionsActions.loadQuestionsFailure({ error }))
          )
        )
      )
    )
  );

  deleteQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAllQuestionsActions.deleteQuestion),
      mergeMap(({ questionId }) =>
        this.adminService.deleteQuestion(questionId).pipe(
          map(() =>
            AdminViewAllQuestionsActions.deleteQuestionSuccess({ questionId })
          ),
          catchError((error) =>
            of(AdminViewAllQuestionsActions.deleteQuestionFailure({ error }))
          )
        )
      )
    )
  );
}
