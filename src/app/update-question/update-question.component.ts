import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css'],
})
export class UpdateQuestionComponent {
  //declared search icon imported from font awesome
  searchicon = faSearch;

  questionForm!: FormGroup;
  currentStep: number = 1;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      details: ['', [Validators.required, Validators.minLength(10)]],
      try: ['', [Validators.required, Validators.minLength(10)]],
      tags: ['', Validators.required],
    });
  }

  //method to handle the next step button click event
  nextStep() {
    const { title, details, try: tryValue } = this.questionForm.controls;

    if (this.currentStep === 1 && title && title.valid) {
      this.currentStep++;
    } else if (this.currentStep === 2 && details && details.valid) {
      this.currentStep++;
    } else if (this.currentStep === 3 && tryValue && tryValue.valid) {
      this.currentStep++;
    }
  }

  //method to handle submit button click event
  onSubmit() {
    if (this.questionForm.valid) {
      console.log('Form submitted successfully!');
      console.log(this.questionForm.value);
      this.questionForm.reset();
      this.currentStep = 1;
    }
  }

  //method to handle discard button clcik event
  discardQuestion() {
    this.questionForm.reset();
    this.currentStep = 1;
  }

  //method to handle home button click event
  onHomeButtonClicked() {
    this.router.navigate(['home']);
  }

  //method to handle ogout button click event
  onLogoutButtonClicked(){
    this.router.navigate(['landing'])
  }
}
