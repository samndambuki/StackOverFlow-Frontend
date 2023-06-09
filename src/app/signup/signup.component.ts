import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router, RouterModule } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { signUp } from 'src/ngrx/auth/auth.actions';
import { Store } from '@ngrx/store';
import { AppState } from 'src/ngrx/app-state';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //declared search icon imported from font awesome module
  searchicon = faSearch;

  //validations for sign up form
  signUpForm: FormGroup;

  //injected router into this constructor to handle navigation
  //injected form builder for creating and managing forms in angular
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store<AppState>
  ) {
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
        return null;
      }

      return { invalidPassword: true };
    }

    this.signUpForm = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), passwordValidator],
      ],
    });
  }

  //method to handle home when the button is clicked
  onLandingButtonClicked() {
    this.router.navigate(['/landing']);
  }

  //method to handle login button click event
  onLoginClicked() {
    this.router.navigate(['/login']);
  }

  onSignUpClicked() {
    if (this.signUpForm.invalid) {
      //displays validation errors
      this.markFormGroupTouched(this.signUpForm);
      return;
    }

    const { userName, email, password } = this.signUpForm.value;
    this.store.dispatch(signUp({ userName, email, password }));

    this.router.navigate(['login']);

    this.signUpForm.reset();
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
