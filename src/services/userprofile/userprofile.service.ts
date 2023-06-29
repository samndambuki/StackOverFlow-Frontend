import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { Store } from '@ngrx/store';
import { deleteUserFailure, deleteUserSuccess, loadUsers } from 'src/ngrx/adminviewallusers/adminviewallusers.actions';
import { AppState } from 'src/ngrx/app-state';
import jwt_decode from 'jwt-decode';
import { updatedProfileResponse } from 'src/interfaces/userProfile/updatedProfileResponse';
import { updateUserProfileSuccess } from 'src/ngrx/userprofile/userprofile.actions';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private usersURL = 'http://localhost:4000/users';

  constructor(private http: HttpClient, private store: Store<AppState>) {}

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserProfile(): Observable<User> {
    const token = this.getToken();
    const userId = token ? this.extractUserIdFromToken(token) : '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token || '',
    });

    return this.http.get<User>(`${this.usersURL}/${userId}`, { headers });
  }

  updateUserProfile(updatedProfile: updatedProfileResponse): Observable<updatedProfileResponse> {
    const token = this.getToken();
    const userId = token ? this.extractUserIdFromToken(token) : '';
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token || '',
    });
    console.log('Updating user profile:', updatedProfile);
  
    return this.http.put<updatedProfileResponse>(`${this.usersURL}/${userId}`, updatedProfile, { headers })
    .pipe(
      tap((updatedProfile) => {
        this.store.dispatch(updateUserProfileSuccess({ updatedProfile }));
        console.log(updatedProfile)
      })
    );
  }

  



  private extractUserIdFromToken(token: string): string {
    const decodedToken: any = jwt_decode(token);
    return decodedToken.userId;
  }
}
