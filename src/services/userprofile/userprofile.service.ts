import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { Store } from '@ngrx/store';
import { deleteUserFailure, deleteUserSuccess, loadUsers } from 'src/ngrx/adminviewallusers/adminviewallusers.actions';
import { AppState } from 'src/ngrx/app-state';
import jwt_decode from 'jwt-decode';

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

  updateProfile(user: User): Observable<User> {
    const token = this.getToken();
    const userId = token ? this.extractUserIdFromToken(token) : '';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: token || '',
    });

    return this.http.put<User>(`${this.usersURL}/${userId}`, user, { headers }).pipe(
      tap(() => {
        this.store.dispatch(loadUsers());
      }),
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  private extractUserIdFromToken(token: string): string {
    const decodedToken: any = jwt_decode(token);
    return decodedToken.userId;
  }
}
