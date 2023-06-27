import { createAction, props } from '@ngrx/store';
import { User } from 'src/interfaces/adminviewallusers/user.interface';


export const updateUserProfile = createAction(
  '[User Profile] Update User Profile',
  props<{ user: User }>()
);
