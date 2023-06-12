import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //base url for my users api
  // private userURL = 'http://localhost:3000'

  //mock json server url
  private userURL = 'http://localhost:3000'

  //http client module to send http requests to backend
  constructor(private http:HttpClient) { }

  //method to get users
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.userURL}/users`)
  }

  //method to delete a user
  deleteUser(userId:string):Observable<any>
  {
    return this.http.delete(`${this.userURL}/users/${userId}`)
  }

}
