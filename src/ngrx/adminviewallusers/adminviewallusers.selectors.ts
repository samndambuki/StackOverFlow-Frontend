import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AdminViewAllUsersState } from './adminviewalllusers.reducer';


export const selectAdminViewAllUsersState = createFeatureSelector<AdminViewAllUsersState>('adminViewAllUsers');

export const selectUsers = createSelector(
  selectAdminViewAllUsersState,
  (state: AdminViewAllUsersState) => state.users
);

export const selectLoading = createSelector(
  selectAdminViewAllUsersState,
  (state: AdminViewAllUsersState) => state.loading
);

export const selectError = createSelector(
  selectAdminViewAllUsersState,
  (state: AdminViewAllUsersState) => state.error
);
