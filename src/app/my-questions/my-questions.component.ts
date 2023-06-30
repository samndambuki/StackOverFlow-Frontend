import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/ngrx/app-state';
import { Store, select } from '@ngrx/store';
import { loadMyQuestions } from 'src/ngrx/myquestions/myquestions.actions';
import { GetQuestions } from 'src/interfaces/getquestions/getQuestions.iterface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css'],
})
export class MyQuestionsComponent implements OnInit {
  //defined search icon imported from font awesome module
  searchicon = faSearch;
  questions$!: Observable<GetQuestions[]>;

  //injected router to handle navigation
  constructor(private router: Router, private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadMyQuestions());
    this.questions$ = this.store.pipe(
      select((state) => state.myQuestions.questions),
      map((questions) => questions || [])
    );
  }
}
