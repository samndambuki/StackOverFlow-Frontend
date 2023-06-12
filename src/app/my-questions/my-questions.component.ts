import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-questions',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './my-questions.component.html',
  styleUrls: ['./my-questions.component.css']
})
export class MyQuestionsComponent {
  //defined search icon imporetd from font awesome module
  searchicon = faSearch;

  //inject router to handle navigation
  constructor(private router:Router){}

  //method to handle askquestion click event
  onAskQuestionClicked(){
    this.router.navigate(['/askquestion'])
  }

  //method to handle single question click event
  onSingleQuestionClikced(){
    this.router.navigate(['/singlequestion'])
  }

  //method to handle update question click event
  onUpdateClicked(){
    this.router.navigate(['/updatequestion'])
  }

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle tags button click event
  onTagsButtonClicked(){
    this.router.navigate(['tags'])
  }

}
