import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { AdminViewAllUsersService } from 'src/services/adminviewallusers/adminviewallusers';
import * as AdminViewAllUsersActions from '../adminviewallusers/adminviewallusers.actions';

@Injectable()
export class AdminViewAllUsersEffects {
  constructor(
    private actions$: Actions,
    private adminService: AdminViewAllUsersService
  ) {}

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAllUsersActions.loadUsers),
      mergeMap(() =>
        this.adminService.getAllUsers().pipe(
          map((users) => AdminViewAllUsersActions.loadUsersSuccess({ users })),
          catchError((error) =>
            of(AdminViewAllUsersActions.loadUsersFailure({ error }))
          )
        )
      )
    )
  );

  deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminViewAllUsersActions.deleteUser),
      mergeMap(({ userId }) =>
        this.adminService.deleteUser(userId).pipe(
          map(() => AdminViewAllUsersActions.deleteUserSuccess({ userId })),
          catchError((error) =>
            of(AdminViewAllUsersActions.deleteUserFailure({ error }))
          )
        )
      )
    )
  );
}
