import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionService } from 'src/services/questions/question.service';
import { loadMyQuestions, loadMyQuestionsFailure, loadMyQuestionsSuccess } from './myquestions.actions';

@Injectable()
export class MyQuestionsEffects {
  loadMyQuestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMyQuestions),
      switchMap(() =>
        this.questionService.getQuestionsByUser().pipe(
          map((questions) => loadMyQuestionsSuccess({ questions })),
          catchError((error) => of(loadMyQuestionsFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private questionService: QuestionService) {}
}
