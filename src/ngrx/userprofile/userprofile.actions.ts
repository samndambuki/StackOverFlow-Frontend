import { createAction, props } from '@ngrx/store';
import { userProfileResponse } from 'src/interfaces/userProfile/userProfileResponse';


export const loadUserProfile = createAction('[User Profile] Load User Profile');
export const loadUserProfileSuccess = createAction(
  '[User Profile] Load User Profile Success',
  props<{ userProfile: userProfileResponse }>()
);
export const loadUserProfileFailure = createAction(
  '[User Profile] Load User Profile Failure',
  props<{ error: any }>()
);
