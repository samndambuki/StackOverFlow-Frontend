import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserProfileState } from './userprofile.reducer';

export const selectUserProfileState =
  createFeatureSelector<UserProfileState>('userProfile');

export const selectUserProfile = createSelector(
  selectUserProfileState,
  (state: UserProfileState) => state.userProfile
);

export const selectUserProfileLoading = createSelector(
  selectUserProfileState,
  (state: UserProfileState) => state.loading
);

export const selectUserProfileError = createSelector(
  selectUserProfileState,
  (state: UserProfileState) => state.error
);
