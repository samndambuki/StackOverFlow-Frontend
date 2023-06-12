import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faArrowUp, faCaretDown, faCaretUp, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singlequestion',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './singlequestion.component.html',
  styleUrls: ['./singlequestion.component.css']
})
export class SinglequestionComponent {
  //imported icons from font awesome modules
  searchicon = faSearch;
  upIcon = faCaretUp
  downIcon = faCaretDown

  constructor(private router:Router){}

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
  
}
