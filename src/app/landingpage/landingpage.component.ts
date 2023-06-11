import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  //declared search icon from font awesome module
  searchicon = faSearch

  //injecting Router to this constructor
  constructor(private router:Router){}

  //sing up method to handle sign up button click event

  onSignUpClicked(){
    this.router.navigate(['/signup']);
  }

  //login method to handle login button click event

  onLoginClicked(){
    this.router.navigate(['/login'])
  }

}
