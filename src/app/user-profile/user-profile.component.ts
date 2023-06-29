import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserProfileService } from 'src/services/userprofile/userprofile.service';
import { Store, select } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import { Observable } from 'rxjs';
import { AppState } from 'src/ngrx/app-state';
import { selectUserProfile, selectUserProfileError, selectUserProfileLoading } from 'src/ngrx/userprofile/userprofile.selectors';
import { userProfileResponse } from 'src/interfaces/userProfile/userProfileResponse';
import { loadUserProfile, updateUserProfile } from 'src/ngrx/userprofile/userprofile.actions';
import { updatedProfileResponse } from 'src/interfaces/userProfile/updatedProfileResponse';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,FontAwesomeModule,ReactiveFormsModule,RouterModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit{
  //declared serach icon imported from font awesome module
  searchicon = faSearch
  profileForm!:FormGroup;

  userProfile$!: Observable<userProfileResponse | undefined>;



  constructor(private router:Router,private formBuilder:FormBuilder, private store: Store<AppState>,
    private userProfileService: UserProfileService){}

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
      // title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      // about: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    });

    // this.userProfileService.getUserProfile().subscribe(
    //   (userProfile: User) => {
    //     this.userProfile = userProfile;
    //     console.log(userProfile); 
    //   },
    //   (error: any) => {
    //     console.error('Failed to retrieve user profile:', error);
    //   }
    // );

    this.store.dispatch(loadUserProfile());

    this.userProfile$ = this.store.select(selectUserProfile);
    this.userProfile$.subscribe((userProfile: userProfileResponse | undefined) => {
      console.log(userProfile);
      if (userProfile) {
        this.profileForm.patchValue({
          userName: userProfile.userName,
          email: userProfile.email
        });
      }
    });
  }


  //method to handle cancel button click event

  cancelEdit(): void {
    this.profileForm.reset();
  }

  // saveProfile(): void {
  //   if (this.profileForm.valid) {
  //     const updatedProfile: userProfileResponse = {
  //       userId: '',
  //       userName: this.profileForm.value.userName,
  //       email: this.profileForm.value.email,
  //       password: this.profileForm.value.password,
  //       createdAt: undefined,
  //       updatedAt: null,
  //       emailSent: 0,
  //       isDeleted: 0,
  //       isAdmin: 0,
  //     };

  //     this.store.dispatch(updateUserProfile({ updatedProfile }));
  //   } else {
  //     console.log('Invalid form. Please fill in all required fields.');
  //     this.profileForm.markAllAsTouched();
  //   }
  // }

  saveProfile(): void {
    const userNameControl = this.profileForm.get('userName');
    const emailControl = this.profileForm.get('email');
  
    if (userNameControl?.valid && emailControl?.valid) {
      const updatedProfile: userProfileResponse = {
        userId: '',
        userName: userNameControl?.value,
        email: emailControl?.value,
        password: '',
        updatedAt: null,
        emailSent: 0,
        isDeleted: 0,
        isAdmin: 0,
      };

      console.log('Updated Profile:', updatedProfile);

  
      this.userProfileService.updateUserProfile(updatedProfile).subscribe(
        (response) => {
          console.log('Update successful:', response);
        },
        (error) => {
          console.log('Update failed:', error);
        }
      );
      
    } else {
      console.log('Invalid form. Please fill in all required fields.');
      this.profileForm.markAllAsTouched();
    }
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
