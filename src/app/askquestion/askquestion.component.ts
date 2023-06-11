import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { QuestionService } from 'src/services/question.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-askquestion',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,FormsModule,HttpClientModule],
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css'],
  providers:[QuestionService]
})
export class AskquestionComponent {

  @ViewChild('questionForm', { static: false })
  questionForm!: NgForm;

  //declared search icon imported from font awesome module
  searchicon = faSearch;
  questionData:any = {}

  constructor(private questionService:QuestionService){}


  isFormValid(): boolean {
    return !!this.questionForm && !!this.questionForm.valid;
  }

  onSubmit(questionForm:any){

    if (questionForm.invalid) {
      // Mark all form controls as touched to display validation errors
      Object.values(questionForm.controls).forEach((control: any) => {
        control.markAsTouched();
      });
      return;
    }

    this.questionService.createQuestion(this.questionData)
    .subscribe(
      response =>{
        console.log('question created successfully',response)
      //resetting the form
      this.questionData = {}
      },
      error=>{
        console.log('Error creating question',error)
      }
    )
  }

  nextStep(nextInput: HTMLInputElement) {
    nextInput.focus();
  }

  

  discardQuestion(questionForm: any) {
    this.questionData = {}; // Reset the question data
    questionForm.resetForm(); // Reset the form
  }
  
}
