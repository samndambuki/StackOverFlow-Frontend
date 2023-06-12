import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //delclared search icon imported form font awesome
  searchicon  = faSearch

  //inject router to handle navigation 
  constructor(private router:Router){}

  //method to handle tags button click event
  onTagsClicked(){
    this.router.navigate(['/tags'])
  }

  //method to handle my questions click event
  onMyQuestionsClicked(){
    this.router.navigate(['/myquestions'])
  }

  //method to handle ask question click event
  onAskQuestionClicked(){
    this.router.navigate(['/askquestion'])
  }

  //method to handle single question clcik event
  onSingleQuestionClicked(){
    this.router.navigate(['/singlequestion'])
  }

  //method to handle logout click event
  onLogoutClicked(){
    this.router.navigate(['/landing'])
  }

  //nvigate to admin page
  onAdminButtonClicked(){
    this.router.navigate(['admin'])
  }

}
