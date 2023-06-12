import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
  //declared sarch icon imported for font awesome module
  searchicon = faSearch;

  constructor(private router:Router){}

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }
}
