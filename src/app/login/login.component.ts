import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/ngrx/app-state';
import { login } from 'src/ngrx/auth/auth.actions';
import { Observable } from 'rxjs';
import { AuthState } from 'src/interfaces/authenticate/AuthState';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  //declared search icon imported form font awesome module
  searchicon = faSearch

  authState$!:Observable<AuthState>

  //inject router to handle navigation
  constructor(private router:Router,private formBuilder:FormBuilder,private store:Store<AppState>){
     // Custom validator function
     function passwordValidator(
      control: AbstractControl
    ): ValidationErrors | null {
      const password = control.value;
      // Check if the password contains at least one letter
      const hasLetter = /[a-zA-Z]/.test(password); 
      // Check if the password contains at least one number
      const hasNumber = /\d/.test(password); 

      if (password && password.length >= 8 && hasLetter && hasNumber) {
        return null; // Password is valid
      }

      return { invalidPassword: true }; // Password is invalid
    }
    
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),passwordValidator]]
    });
  }

  ngOnInit(): void {
    this.authState$ = this.store.select("auth")
  }

  //method to handle sign up button click event
  onSignUpClicked(){
    this.router.navigate(['/signup'])
  }

  //method for login button click event
  onLoginClicked() {
    if (this.loginForm.invalid) {
      return;
    }

    // Form is valid, perform the login logic here
    const { email, password } = this.loginForm.value;
    // console.log('Email:', email);
    // console.log('Password:', password);
    this.store.dispatch(login({email,password}))

    // Reset the form after successful login
    this.loginForm.reset();
  }

  //method to handle landing page logic

  onLandingPageClicked(){
    this.router.navigate(['landing'])
  }

  //method to handle landing page click event
  onLandingPageButtonClciked(){
    this.router.navigate(['landing'])
  }

}
