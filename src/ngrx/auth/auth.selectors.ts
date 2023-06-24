import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from 'src/interfaces/authenticate/AuthState';


const getAuthState = createFeatureSelector<AuthState>('auth');

export const getToken = createSelector(getAuthState, (state) => state.token);
export const getIsAdmin = createSelector(getAuthState, (state) => state.isAdmin);
export const getLoading = createSelector(getAuthState, (state) => state.loading);
export const getError = createSelector(getAuthState, (state) => state.error);
export const getIsLoggedOut = createSelector(getToken, (token) => !token);
