import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //declared search icon imported form font awesome module
  searchicon = faSearch

  //inject router to handle navigation
  constructor(private router:Router){}

  //method to handle sign up button click event
  onSignUpClicked(){
    this.router.navigate(['/signup'])
  }
}
