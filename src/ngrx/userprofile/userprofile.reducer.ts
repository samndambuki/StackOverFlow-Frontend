import { createReducer, on } from '@ngrx/store';
import { updateUserProfile } from './userprofile.actions';
import { User } from 'src/interfaces/adminviewallusers/user.interface';


export interface UserProfileState {
  user: User | null;
}

export const initialState: UserProfileState = {
  user: null,
};

export const userProfileReducer = createReducer(
  initialState,
  on(updateUserProfile, (state, { user }) => ({
    ...state,
    user: user,
  }))
);
