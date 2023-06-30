import { createReducer, on } from '@ngrx/store';
import {
  signUpSuccess,
  signUpFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from './auth.actions';
import { AuthState } from 'src/interfaces/authenticate/AuthState';

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  isAdmin: false,
  user: null,
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(signUpSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(signUpFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loginSuccess, (state, { token, isAdmin }) => ({
    ...state,
    token,
    isAdmin,
    loading: false,
    error: null,
  })),
  on(loginFailure, (state, { error }) => ({ ...state, loading: false, error })),
  on(logoutSuccess, (state) => ({
    ...state,
    token: null,
    isAdmin: false,
    loading: false,
    error: null,
  })),
  on(logoutFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
