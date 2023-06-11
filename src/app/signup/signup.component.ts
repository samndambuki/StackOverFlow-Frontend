import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
//for validation purposes
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  //declared search icon imported from font awesome module
  searchicon = faSearch;

  //validations for sign up form
  signUpForm: FormGroup;

  //injected router into this constructor to handle navigation
  //injected form builder for creating and managin forms in angular
  constructor(private router: Router, private formBuilder: FormBuilder) {
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
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(8), passwordValidator],
      ],
    });
  }

  //method to handle home when the button is clicked
  onHomeClicked() {
    this.router.navigate(['/home']);
  }

  //method to handle login button click event
  onLoginClicked() {
    this.router.navigate(['/login']);
  }

  onSubmit() {
    if (this.signUpForm.invalid) {
      // Mark form controls as touched to display validation errors
      this.markFormGroupTouched(this.signUpForm);
      return;
    }

    // Form is valid, perform the submission logic here
    const formData = this.signUpForm.value;
    console.log(formData); // Replace with your desired logic

    // Reset the form after successful submission
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
