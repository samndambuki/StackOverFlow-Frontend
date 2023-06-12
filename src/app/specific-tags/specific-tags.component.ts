import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specific-tags',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './specific-tags.component.html',
  styleUrls: ['./specific-tags.component.css']
})
export class SpecificTagsComponent {
  //imported search cion from font awesome module
  searchicon = faSearch

  constructor(private router:Router){}

  //method to handle a specific question clicked
  onSingleQuestionClicked(){
    this.router.navigate(['singlequestion'])
  }

  //method to handle ask question click event
  onAskQuestionClicked(){
    this.router.navigate(['askquestion'])
  }

  //method to handle hoeme button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle tags button click event
  onTagsButtonClicked(){
    this.router.navigate(['tags'])
  }

  //method to handle my questions button click event
  onMyQuestionButtonClicked(){
    this.router.navigate(['myquestions'])
  }
}
