import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { Question } from 'src/interfaces/ask question/question.interface';
import { AppState } from 'src/ngrx/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AdminViewAllQuestions } from 'src/interfaces/adminviewallquestions/adminviewallquestions';
import {
  deleteQuestion,
  loadQuestions,
} from 'src/ngrx/adminviewallquestions/adminviewallquestions.actions';

@Component({
  selector: 'app-admin-view-all-questions',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './admin-view-all-questions.component.html',
  styleUrls: ['./admin-view-all-questions.component.css'],
})
export class AdminViewAllQuestionsComponent {
  //declared search icon imported from font awesome icons
  searchicon = faSearch;

  //holds fetched questions
  questions: Question[] = [];

  questions$!: Observable<AdminViewAllQuestions[]>;

  //injected the service and http client
  constructor(private router: Router, private store: Store<AppState>) {}

  //fetches questions when the component is initialized
  ngOnInit() {
    this.store.dispatch(loadQuestions());
    this.questions$ = this.store.select(
      (state) => state.adminViewAllQuestions.questions
    );
  }

  //method to navigate to users
  onUserButtonClicked() {
    this.router.navigate(['adminseesallusers']);
  }

  onHomeButtonCicked() {
    this.router.navigate(['home']);
  }

  deleteQuestion(questionId: string) {
    this.store.dispatch(deleteQuestion({ questionId }));
  }
}
