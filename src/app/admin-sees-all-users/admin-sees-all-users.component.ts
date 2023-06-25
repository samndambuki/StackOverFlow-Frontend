import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Route, Router, RouterModule } from '@angular/router';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/ngrx/app-state';
import { Observable } from 'rxjs';
import { deleteUser, loadUsers } from 'src/ngrx/adminviewallusers/adminviewallusers.actions';

@Component({
  selector: 'app-admin-sees-all-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,RouterModule],
  templateUrl: './admin-sees-all-users.component.html',
  styleUrls: ['./admin-sees-all-users.component.css']
})
export class AdminSeesAllUsersComponent implements OnInit {
  //declared search icon and impoerted it from font awesome module
  searchicon = faSearch

  //user interface - define structure of user object
  //property to hold list of users fetched from the server
  users:User[]=[]

  users$!: Observable<User[]>;


  //injected users Service - handles http requests for users
  constructor(private router:Router,private store: Store<AppState>){}

  //lifecycle hook called when the component is initialized
  ngOnInit(){
    this.store.dispatch(loadUsers());
  this.users$ = this.store.select((state) => state.adminViewAllUsers.users);
  }



  //method to delete a user
  deleteUser(userId:string)
  {
    this.store.dispatch(deleteUser({ userId }));
    
  }

  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle questions button click event
  onQuestionsButtonClicked(){
    this.router.navigate(['adminviewallquestions'])
  }
}
