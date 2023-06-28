import { createAction, props } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';

// Action to load user profile
export const loadUserProfile = createAction('[UserProfile] Load User Profile');

// Action to handle successful loading of user profile
export const loadUserProfileSuccess = createAction(
  '[UserProfile] Load User Profile Success',
  props<{ user: User }>()
);

// Action to handle failure in loading user profile
export const loadUserProfileFailure = createAction(
  '[UserProfile] Load User Profile Failure',
  props<{ error: any }>()
);

// Action to update user profile
export const updateUserProfile = createAction(
  '[UserProfile] Update User Profile',
  props<{ user: User }>()
);

// Action to handle successful update of user profile
export const updateUserProfileSuccess = createAction(
  '[UserProfile] Update User Profile Success',
  props<{ user: User }>()
);

// Action to handle failure in updating user profile
export const updateUserProfileFailure = createAction(
  '[UserProfile] Update User Profile Failure',
  props<{ error: any }>()
);
