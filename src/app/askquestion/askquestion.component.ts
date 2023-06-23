import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/services/question.service';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-askquestion',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule,HttpClientModule,ReactiveFormsModule,RouterModule],
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css'],
  providers:[QuestionService]
})
export class AskquestionComponent {
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

  
}
