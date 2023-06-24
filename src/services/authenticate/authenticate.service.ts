import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthentication } from 'src/interfaces/authenticate/authenticate.interface';
import { LoginResponse } from 'src/interfaces/authenticate/LoginResponse';
import { UserAddedResponse } from 'src/interfaces/authenticate/userAddedResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  private apiUrl = 'http://localhost:4000/users'; 

  constructor(private http: HttpClient) {}


    loginUser(userAuth: UserAuthentication): Observable<LoginResponse> {
    //bad request,500 error, sucess, 404, 

    const url = `${this.apiUrl}/login`;
    return this.http.post<LoginResponse>(url, userAuth);
  }

  registerUser(userAuth: UserAuthentication): Observable<HttpResponse<UserAddedResponse>> {
    const url = `${this.apiUrl}`;
    console.log(userAuth)
    return this.http.post<HttpResponse<UserAddedResponse>>(url, userAuth);
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  removeToken(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return token !== null;
  }
}
