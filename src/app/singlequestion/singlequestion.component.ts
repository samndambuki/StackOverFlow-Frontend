import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowUp, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { singleQuestionAnswer } from 'src/interfaces/singlequestion/singleQuestionAnswer';
import { Observable } from 'rxjs';
import { AppState } from 'src/ngrx/app-state';
import { Store } from '@ngrx/store';
import * as singleQuestionSelectors from 'src/ngrx/singleQuestion/singleQuestion.selectors';
import * as singleQuestionActions from 'src/ngrx/singleQuestion/singleQuestion.actions';
import { singleQuestion } from 'src/interfaces/singlequestion/singleQuestion';

@Component({
  selector: 'app-singlequestion',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent {
  //imported icons from font awesome modules
  searchicon = faSearch;
  upIcon = faCaretUp
  downIcon = faCaretDown
  answerForm!: FormGroup;

  questionId!: string;
  question$!: Observable<singleQuestion[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private router:Router,private formBuilder: FormBuilder, private store: Store<AppState>){
    // this.question$ = this.store.select(singleQuestionSelectors.selectQuestionById(this.questionId));

    this.store.select(singleQuestionSelectors.selectQuestionById(this.questionId)).subscribe(response=>{
      console.log(response);
      
    })
    this.loading$ = this.store.select(singleQuestionSelectors.selectLoading);
    this.error$ = this.store.select(singleQuestionSelectors.selectError);
  }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answerInputField: ['', [Validators.required, Validators.minLength(10)]]
    });
    this.store.dispatch(singleQuestionActions.getAnswerById({ answerId: this.questionId }));
    
  }

  get answerInputField() {
    return this.answerForm.get('answerInputField');
  }

  submitAnswer() {
    if (this.answerForm.valid) {
      const answer = this.answerForm.value.answerInputField;
      console.log('Submitted Answer:', answer);
      this.answerForm.reset();
      this.store.dispatch(singleQuestionActions.addAnswer({ questionId: this.questionId, answer }));
    }
  }

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle tags button click event
  onTagsButtonClicked(){
    this.router.navigate(['tags'])
  }

  //method to handle my questions button click event
  onMyQuestionsButtonClicked(){
    this.router.navigate(['myquestions'])
  }
  
  //method to handle logout button clcik event
  onLogoutButtonClicked(){
    this.router.navigate(['landing'])
  }

}
