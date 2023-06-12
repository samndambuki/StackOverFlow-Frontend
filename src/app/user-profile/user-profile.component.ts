import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  //declared serach icon imported from font awesome module
  searchicon = faSearch

  constructor(private router:Router){}

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }
}
