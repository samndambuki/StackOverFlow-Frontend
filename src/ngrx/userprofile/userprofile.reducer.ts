import { createReducer, on } from '@ngrx/store';
import * as UserProfileActions from './userprofile.actions';
import { userProfileResponse } from 'src/interfaces/userProfile/userProfileResponse';

export interface UserProfileState {
  userProfile: userProfileResponse | undefined;
  loading: boolean;
  error: any;
}

export const initialState: UserProfileState = {
  userProfile: undefined,
  loading: false,
  error: null,
};

export const userProfileReducer = createReducer(
  initialState,
  on(UserProfileActions.loadUserProfile, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserProfileActions.loadUserProfileSuccess, (state, { userProfile }) => ({
    ...state,
    userProfile,
    loading: false,
  })),
  on(UserProfileActions.loadUserProfileFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(UserProfileActions.updateUserProfile, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserProfileActions.updateUserProfileSuccess, (state, { updatedProfile }) => ({
    ...state,
    userProfile: updatedProfile,
    loading: false,
  })),
  on(UserProfileActions.updateUserProfileFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  }))
);
