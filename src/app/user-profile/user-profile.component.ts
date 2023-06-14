import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent{
  //declared serach icon imported from font awesome module
  searchicon = faSearch

  profileForm!:FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      displayName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      location: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      about: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    });
  }

  //method to handle save profile button click event
  saveProfile(): void {
    if (this.profileForm.valid) {
      // Form is valid, perform save operation
      console.log('Form submitted!');
      console.log('Form details:', this.profileForm.value);
      this.profileForm.reset();
    } else {
      // Form is invalid, display error messages
      console.log('Invalid form. Please fill in all required fields.');
      this.profileForm.markAllAsTouched();
    }
  }

  //method to handle cancel button click event

  cancelEdit(): void {
    this.profileForm.reset();
  }


  //method to handle home button click event
  onHomeButtonClicked(){
    this.router.navigate(['home'])
  }

  //method to handle Tags click event
  onTagsButtonClicked(){
    this.router.navigate(['tags'])
  }

  //method to handle my questions click event
  onMyQuestionsButtonClicked(){
    this.router.navigate(['myquestions'])
  }

  //method to handle logout button click event
  onLogoutButtonClciked(){
    this.router.navigate(['landing'])
  }
}
