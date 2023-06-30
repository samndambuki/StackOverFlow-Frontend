import { createAction, props } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';

export const loadUsers = createAction('[Admin View All Users] Load Users');

export const loadUsersSuccess = createAction(
  '[Admin View All Users] Load Users Success',
  props<{ users: User[] }>()
);

export const loadUsersFailure = createAction(
  '[Admin View All Users] Load Users Failure',
  props<{ error: any }>()
);

export const deleteUser = createAction(
  '[Admin View All Users] Delete User',
  props<{ userId: string }>()
);

export const deleteUserSuccess = createAction(
  '[Admin View All Users] Delete User Success',
  props<{ userId: string }>()
);

export const deleteUserFailure = createAction(
  '[Admin View All Users] Delete User Failure',
  props<{ error: any }>()
);
