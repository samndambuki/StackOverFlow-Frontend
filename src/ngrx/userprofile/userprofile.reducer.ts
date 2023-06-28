import { createReducer, on } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import * as UserProfileActions from './userprofile.actions';

export interface UserProfileState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: UserProfileState = {
  user: null,
  loading: false,
  error: null,
};

export const userProfileReducer = createReducer(
  initialState,
  on(UserProfileActions.loadUserProfile, (state) => ({ ...state, loading: true })),
  on(UserProfileActions.loadUserProfileSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(UserProfileActions.loadUserProfileFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(UserProfileActions.updateUserProfile, (state, { user }) => ({ ...state, loading: true })),
  on(UserProfileActions.updateUserProfileSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(UserProfileActions.updateUserProfileFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
