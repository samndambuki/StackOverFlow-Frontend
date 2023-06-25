import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/ngrx/app-state';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/interfaces/authenticate/AuthState';
import { Observable} from 'rxjs';
import { logout } from 'src/ngrx/auth/auth.actions';
import { QuestionService } from 'src/services/questions/question.service';
import { GetQuestionsResponse } from 'src/interfaces/getquestions/getQuestionsResponse';
import { selectGetQuestions, selectGetQuestionsError, selectGetQuestionsLoading } from 'src/ngrx/getQuestions/get-questions.selectors';
import { loadGetQuestions } from 'src/ngrx/getQuestions/get-questions.actions';





@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //delclared search icon imported form font awesome
  searchicon  = faSearch
  authUser$!:Observable<AuthState>
  questions$!: Observable<GetQuestionsResponse[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  //inject router to handle navigation 
  constructor(private router:Router,private store:Store<AppState>, private questionService: QuestionService){

  }

  ngOnInit(): void {
    this.authUser$ = this.store.select("auth");

    this.questions$ = this.store.pipe(select(selectGetQuestions));

    this.store.pipe(select(selectGetQuestions)).subscribe(response=>{console.log(response)})

    this.loading$ = this.store.select(selectGetQuestionsLoading);
    this.error$ = this.store.select(selectGetQuestionsError);

    const token = this.questionService.getToken();
    this.store.dispatch(loadGetQuestions());

  }

  
  logout(): void {
    // Dispatch the logout action
    this.store.dispatch(logout());
    // Remove token from local storage
    localStorage.removeItem('token');
    //redirect to landing page
    this.router.navigate(['landing']);
  }

}
