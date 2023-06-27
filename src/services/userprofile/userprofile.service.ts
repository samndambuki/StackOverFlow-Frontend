import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import jwt_decode from 'jwt-decode';
import { updateUserProfile } from 'src/ngrx/userprofile/userprofile.actions';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { AppState } from 'src/ngrx/app-state';


@Injectable()
export class UserProfileService {
  private  API_URL = 'http://localhost:4000'; 
  private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    })
  };

  constructor(
    private http: HttpClient,
    private store: Store<AppState>
  ) {}

  getToken(): string {
    const token = localStorage.getItem('token'); 
    return token || '';
  }

  getUserIdFromToken(): string {
    const token = this.getToken();
    const decodedToken: any = jwt_decode(token);
    return decodedToken?.userId || '';
  }

  getLoggedInUser(): Observable<User> {
    const userId = this.getUserIdFromToken();
    return this.http.get<User>(`${this.API_URL}/users/${userId}`, this.httpOptions);
  }

  updateProfile(user: User): Observable<User> {
    const userId = this.getUserIdFromToken();
    console.log('userId:', userId);
    console.log('user:', user);
    console.log('httpOptions:', this.httpOptions);

    return this.http.put<User>(`${this.API_URL}/users/${userId}`, user, this.httpOptions)
      .pipe(
        tap((updatedUser: User) => {
        
          this.store.dispatch(updateUserProfile({ user: updatedUser }));
        })
      );
  }
}
