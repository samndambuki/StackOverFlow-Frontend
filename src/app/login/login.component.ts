import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginForm: FormGroup;

  //declared search icon imported form font awesome module
  searchicon = faSearch

  //inject router to handle navigation
  constructor(private router:Router,private formBuilder:FormBuilder){
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
    console.log('Email:', email);
    console.log('Password:', password);

    this.router.navigate(['home'])

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
