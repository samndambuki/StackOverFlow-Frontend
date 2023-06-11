import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  //declared search icon imported from font awesome module
  searchicon = faSearch

  //injected router into this constructor to handle navigation
  constructor(private router:Router){}

  //method to handle home when the button is clicked
  onHomeClicked(){
    this.router.navigate(['/home']);
  }

  //method to handle login button click event
  onLoginClicked(){
    this.router.navigate(['/login'])
  }
}
