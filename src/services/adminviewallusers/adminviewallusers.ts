import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { Store } from '@ngrx/store';
import {
  deleteUserFailure,
  deleteUserSuccess,
  loadUsers,
} from 'src/ngrx/adminviewallusers/adminviewallusers.actions';

@Injectable({
  providedIn: 'root',
})
export class AdminViewAllUsersService {
  private usersURL = 'http://localhost:4000/users';

  constructor(private http: HttpClient, private store: Store) {}

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  getAllUsers(): Observable<User[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    return this.http.get<User[]>(this.usersURL, { headers });
  }

  deleteUser(userId: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      token: this.getToken() || '',
    });

    return this.http.delete(`${this.usersURL}/${userId}`, { headers }).pipe(
      tap(() => {
        this.store.dispatch(deleteUserSuccess({ userId }));
        this.store.dispatch(loadUsers());
      }),
      catchError((error) => {
        this.store.dispatch(deleteUserFailure({ error }));
        return throwError(error);
      })
    );
  }
}
