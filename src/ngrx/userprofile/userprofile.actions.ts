import { createAction, props } from '@ngrx/store';
import { updatedProfileResponse } from 'src/interfaces/userProfile/updatedProfileResponse';
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

//actions to update user profile
export const updateUserProfile = createAction(
  '[User Profile] Update User Profile',
  props<{ updatedProfile: updatedProfileResponse }>()
);

export const updateUserProfileSuccess = createAction(
  '[User Profile] Update User Profile Success',
  props<{ updatedProfile: updatedProfileResponse }>()
);

export const updateUserProfileFailure = createAction(
  '[User Profile] Update User Profile Failure',
  props<{ error: any }>()
);
