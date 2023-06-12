import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  //imported search icon from font awesome module
  searchicon = faSearch;

  //injected router to help in navigation
  constructor(private router:Router){}

  //method to handle questions button click event
  onQuestionButtonClicked(){
    this.router.navigate(['adminviewallquestions'])
  }

  //method to handle users button click event
  onUsersButtonClicked(){
    this.router.navigate(['adminseesallusers'])
  }

  //method to handle home button click event
  onHomeButtonClciked(){
    this.router.navigate(['home'])
  }

}
