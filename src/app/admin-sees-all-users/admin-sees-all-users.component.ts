import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { User } from 'src/interfaces/user.interface';
import { UsersService } from 'src/services/users.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sees-all-users',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule],
  templateUrl: './admin-sees-all-users.component.html',
  styleUrls: ['./admin-sees-all-users.component.css']
})
export class AdminSeesAllUsersComponent implements OnInit {
  //declared search icon and impoerted it from font awesome module
  searchicon = faSearch

  //user interface - define structure of user object
  //property to hold list of users fetched from the server
  users:User[]=[]

  //injected users Service - handles http requests for users
  constructor(private usersService:UsersService,private router:Router){}

  //lifecycle hook called when the component is initialized
  ngOnInit(){
    //called to fetch a list of users
    this.getUsers();
  }

  //method to fetch all users
  getUsers()
  {
    //subscribe - subscribes to the observable and hanldes success and error messages
    this.usersService.getUsers().subscribe(
      (response:User[]) =>{
        //response is assigned to users property
        this.users = response
      },
      (error)=>{
        console.log('Error fetchin users',error)
      } 
    )
  }

  //method to delete a user
  deleteUser(userId:string)
  {
    //subscribe - handle success and errror messages
    this.usersService.deleteUser(userId).subscribe(
      //success 
      (response)=>{
        this.users = this.users.filter((user)=> user.id !== userId)
      },
      (error)=>{
        console.log("Error deleting user",error)
      }
    )
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
