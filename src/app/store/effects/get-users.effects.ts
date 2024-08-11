import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersService } from '../../users.service';

import { map, mergeMap } from 'rxjs';
import { loadUsers, loadUsersSuccess } from '../actions/user.actions';

@Injectable()
export class GetUsersEffects {
  actions$ = inject(Actions);
  usersService = inject(UsersService);

  loadUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUsers),
      mergeMap(() =>
        this.usersService
          .getUsers()
          .pipe(map((users) => loadUsersSuccess({ users })))
      )
    );
  });
}
