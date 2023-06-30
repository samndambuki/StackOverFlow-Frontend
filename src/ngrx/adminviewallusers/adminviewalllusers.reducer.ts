import { createReducer, on } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';
import * as AdminViewAllUsersActions from '../adminviewallusers/adminviewallusers.actions';

export interface AdminViewAllUsersState {
  users: User[];
  loading: boolean;
  error: any;
}

const initialState: AdminViewAllUsersState = {
  users: [],
  loading: false,
  error: null,
};

export const adminViewAllUsersReducer = createReducer(
  initialState,
  on(AdminViewAllUsersActions.loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(AdminViewAllUsersActions.loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(AdminViewAllUsersActions.loadUsersFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(AdminViewAllUsersActions.deleteUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter((user) => user.userId !== userId),
  }))
);
