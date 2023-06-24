import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { AppState } from 'src/ngrx/app-state';
import { Store } from '@ngrx/store';
import { AuthState } from 'src/interfaces/authenticate/AuthState';
import { Observable } from 'rxjs';
import { logout } from 'src/ngrx/auth/auth.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //delclared search icon imported form font awesome
  searchicon  = faSearch
  authUser$!:Observable<AuthState>

  //inject router to handle navigation 
  constructor(private router:Router,private store:Store<AppState>){

  }

  ngOnInit(): void {
    this.authUser$ = this.store.select("auth") 
  }

  logout(): void {
    // Dispatch the logout action
    this.store.dispatch(logout());
    // Remove token from local storage
    localStorage.removeItem('token');
    //redirect to landing page
    this.router.navigate(['landing']);
  }

}
