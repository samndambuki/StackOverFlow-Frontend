import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/ngrx/app-state';
import { Store, select } from '@ngrx/store';
import { loadMyQuestions, loadQuestionById } from 'src/ngrx/myquestions/myquestions.actions';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';
import { Observable, map } from 'rxjs';
import { GetQuestionsResponse } from 'src/interfaces/getquestions/getQuestionsResponse';
import { Question } from 'src/interfaces/ask question/question.interface';
import { selectQuestionById } from 'src/ngrx/myquestions/myquestions.selectors';
import { updateQuestion } from 'src/ngrx/updateQuestion/updateQuestion.actions';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent implements OnInit {
  //defined search icon imporetd from font awesome module
  searchicon = faSearch;
  questions$!: Observable<GetQuestions[]>;

  //stores the selected question for update
  selectedQuestion: Question | null = null

  //inject router to handle navigation
  constructor(private router:Router,private store: Store<AppState>){}

  ngOnInit() {
    this.store.dispatch(loadMyQuestions());
   
    this.questions$ = this.store.pipe(
      select(state => state.myQuestions.questions),
      map(questions => questions || [])
    );

    // this.questions$ = this.store.pipe(select(selectQuestionsByUser));
  }

  onUpdateQuestion(questionId: string) {
    this.store.dispatch(loadQuestionById({ questionId }));
    this.store.pipe(select(selectQuestionById(questionId))).subscribe(question => {
      if (question) {
        this.selectedQuestion = question;
        this.router.navigate(['/updatequestion', questionId]);
      } else {
        // Handle the case when the question is not found
      }
    });
  }

  onEditQuestion(questionId: string) {
    this.store.dispatch(loadQuestionById({ questionId }));
    this.store.pipe(select(selectQuestionById(questionId))).subscribe(question => {
      if (question) {
        this.selectedQuestion = question;
        this.router.navigate(['/updatequestion', questionId]);
      } else {
        // Handle the case when the question is not found
      }
    });
  }

  onUpdateButtonClick() {
    if (this.selectedQuestion && this.selectedQuestion.questionId) {
      const questionId  = this.selectedQuestion.questionId
      // Dispatch the updateQuestion action with the updated question data
      this.store.dispatch(updateQuestion({ questionId,question: this.selectedQuestion }));
    }
  }

}
