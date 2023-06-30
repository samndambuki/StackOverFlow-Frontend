import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from 'src/services/questions/question.service';
import {
  loadMyQuestions,
  loadMyQuestionsFailure,
  loadMyQuestionsSuccess,
  loadQuestionById,
  loadQuestionByIdFailure,
  loadQuestionByIdSuccess,
} from './myquestions.actions';

@Injectable()
export class MyQuestionsEffects {
  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}

  loadQuestionById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadQuestionById),
      mergeMap(({ questionId }) =>
        this.questionService.getQuestionById(questionId).pipe(
          map((question) => loadQuestionByIdSuccess({ question })),
          catchError((error) => of(loadQuestionByIdFailure({ error })))
        )
      )
    )
  );

  loadMyQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMyQuestions),
      switchMap(() =>
        this.questionService.getQuestionsByUser().pipe(
          map((questions) => loadMyQuestionsSuccess({ questions })),
          catchError((error) =>
            of(loadMyQuestionsFailure({ error: error.message }))
          )
        )
      )
    )
  );
}
