import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { QuestionService } from 'src/services/questions/question.service';
import { loadGetQuestions, loadGetQuestionsFailure, loadGetQuestionsSuccess } from 'src/ngrx/getQuestions/get-questions.actions';

@Injectable()
export class GetQuestionsEffects {
  constructor(private actions$: Actions, private questionService: QuestionService) {}

  getQuestions$: Observable<any> = createEffect(() =>
  this.actions$.pipe(
    ofType(loadGetQuestions),
    switchMap(() =>
      this.questionService.getQuestions().pipe(
        map((responses) => loadGetQuestionsSuccess({ questions: responses })),
        catchError((error) => of(loadGetQuestionsFailure({ error: error.message })))
      )
    )
  )
);
}
