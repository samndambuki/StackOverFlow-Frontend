import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  faCaretDown,
  faCaretUp,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, Params, Router, RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppState } from 'src/ngrx/app-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getAnswerByQuestionId } from 'src/interfaces/singlequestion/getAnswerByQuestionIdResponse';
import { SingleQuestionService } from 'src/services/singleQuestion/singleQuestionService';
import { postAnswerRequest } from 'src/interfaces/singlequestion/postAnswer';
@Component({
  selector: 'app-singlequestion',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, RouterModule],
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css'],
})
export class SinglequestionComponent {
  //imported icons from font awesome modules
  searchicon = faSearch;
  upIcon = faCaretUp;
  downIcon = faCaretDown;
  questionId!: string;
  answerForm!: FormGroup;
  answers$!: Observable<getAnswerByQuestionId[]>;
  loadedanswers!: getAnswerByQuestionId[];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private singleQuestionService: SingleQuestionService
  ) {
    this.answers$ = this.store.select((state) => state.singleQuestion.answers);
  }

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answerInputField: ['', [Validators.required, Validators.minLength(10)]],
    });

    this.route.params.subscribe((param: Params) => {
      this.questionId = param['id'];
      this.loadAnswersByQuestionId();
    });
    console.log(this.questionId);
  }

  get answerInputField() {
    return this.answerForm.get('answerInputField');
  }

  submitAnswer() {
    let token = localStorage.getItem('token')!;

    if (this.answerForm.valid) {
      const answer: postAnswerRequest = {
        body: this.answerForm.value.answerInputField,
      };
      // Call the service to post the answer
      this.singleQuestionService
        .postAnswer(this.questionId, answer, token)
        .subscribe(() => {
          console.log('Answer submitted successfully', answer);
          this.answerForm.reset();
          this.loadAnswersByQuestionId();
        });
    }
  }

  loadAnswersByQuestionId() {
    let token = localStorage.getItem('token')!;
    console.log('Loading answers for question ID:', this.questionId);
    // Call the service to get the answers
    this.singleQuestionService
      .getAnswersByQuestionId(this.questionId, token)
      .subscribe(
        (res) => {
          if (res) {
            this.loadedanswers = res;
            console.log(this.loadedanswers);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  //method to handle logout button clcik event
  onLogoutButtonClicked() {
    this.router.navigate(['landing']);
  }
}
