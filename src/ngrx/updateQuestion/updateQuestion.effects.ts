import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from 'src/services/questions/question.service';
import { updateQuestion, updateQuestionFailure, updateQuestionSuccess } from './updateQuestion.actions';


@Injectable()

export class QuestionEffects {

  updateQuestion$ = createEffect(() =>

    this.actions$.pipe(

      ofType(updateQuestion),

      mergeMap(({ questionId, updatedQuestion }) =>

        this.questionService.updateQuestion(questionId, updatedQuestion).pipe(

          map(() => updateQuestionSuccess()),

          catchError(error => of(updateQuestionFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private questionService: QuestionService
  ) {}
}
