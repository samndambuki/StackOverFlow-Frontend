import { createAction, props } from '@ngrx/store';

export const signUp = createAction('[Auth] Sign Up', props<{ userName:string,email: string, password: string }>());
export const signUpSuccess = createAction('[Auth] Sign Up Success');
export const signUpFailure = createAction('[Auth] Sign Up Failure', props<{ error: string }>());

export const login = createAction('[Auth] Login', props<{ email: string, password: string }>());
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string, isAdmin?: boolean }>());
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());
