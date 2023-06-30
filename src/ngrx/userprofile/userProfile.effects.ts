import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as UserProfileActions from './userprofile.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { UserProfileService } from 'src/services/userprofile/userprofile.service';

@Injectable()
export class UserProfileEffects {
  constructor(
    private actions$: Actions,
    private userProfileService: UserProfileService
  ) {}

  loadUserProfile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserProfileActions.loadUserProfile),
      mergeMap(() =>
        this.userProfileService.getUserProfile().pipe(
          map((userProfile) =>
            UserProfileActions.loadUserProfileSuccess({ userProfile })
          ),
          catchError((error) =>
            of(UserProfileActions.loadUserProfileFailure({ error }))
          )
        )
      )
    )
  );
}
