import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-question',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent {
  //declared search icon imported from font awesome
  searchicon = faSearch;

  constructor(private router:Router){}

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }
}
