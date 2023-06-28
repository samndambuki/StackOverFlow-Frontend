import { createSelector } from '@ngrx/store';
import { AppState } from '../app-state';
import { UserProfileState } from './userprofile.reducer';


// Selector to get the user profile state
export const selectUserProfile = (state: AppState) => state.userProfile;

// Selector to get the user profile
export const selectUser = createSelector(
  selectUserProfile,
  (state: UserProfileState) => state.user
);

// Selector to check if user profile is loading
export const selectLoading = createSelector(
  selectUserProfile,
  (state: UserProfileState) => state.loading
);

// Selector to get the error in user profile
export const selectError = createSelector(
  selectUserProfile,
  (state: UserProfileState) => state.error
);
