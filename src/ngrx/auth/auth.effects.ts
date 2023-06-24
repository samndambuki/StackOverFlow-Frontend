import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { login, loginFailure, loginSuccess, logout, logoutFailure, logoutSuccess, signUp, signUpFailure, signUpSuccess } from './auth.actions';
import { AuthenticateService } from 'src/services/authenticate/authenticate.service';
import { HttpResponse } from '@angular/common/http';
import { LoginResponse } from 'src/interfaces/authenticate/LoginResponse';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthenticateService, private router:Router) {}
  
  signUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signUp),
      switchMap(({ userName,email, password }) =>
        this.authService.registerUser({userName,email, password}).pipe(
          map(() => signUpSuccess()),
          catchError((error) => of(signUpFailure({ error: error.message })))
        )
      )
    )
  );

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(login),
    switchMap(({ email, password }) =>
      this.authService.loginUser({ email, password }).pipe(
        map((response) => {
          // const body = response.body;
          if (response) {
            console.log(response);
           
            localStorage.setItem('token',response.token)

            this.router.navigate(['home'])
            
            return loginSuccess({ token: response.token, isAdmin: Boolean(response.isAdmin) });
          } else {
            throw new Error('Invalid response body');
          }
        }),
        catchError((error) => {
          console.log(error)
          return of(loginFailure({ error: error.error.message }))
        })
      )
    )
  )
);

logout$ = createEffect(() =>
  this.actions$.pipe(
    ofType(logout),
    map(() => {
      // Remove token from local storage
      localStorage.removeItem('token');
      // Redirect to login or another appropriate page
      this.router.navigate(['login']);
      return logoutSuccess();
    })
  )
);

}
