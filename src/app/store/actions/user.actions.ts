import { createAction, props } from '@ngrx/store';

export interface User {
  id: number;
  name: string;
  age: number;
}

// Actions types
export enum UserActionTypes {
  AddUser = '[User] Add User',
  RemoveUser = '[User] Remove User',
  LoadUsers = '[GetUsers] GetUsers Load',
  LoadUsersSuccess = '[GetUsers] GetUsers Loaded',
  LoadUsersFailed = '[GetUsers] GetUsers Failed',
}

// Actions
export const addUser = createAction(
  UserActionTypes.AddUser,
  props<{ user: User }>()
);

export const removeUser = createAction(
  UserActionTypes.RemoveUser,
  props<{ id: number }>()
);

export const loadUsers = createAction(UserActionTypes.LoadUsers);

export const loadUsersSuccess = createAction(
  UserActionTypes.LoadUsersSuccess,
  props<{ users: ReadonlyArray<User> }>()
);

export const loadUsersFailed = createAction(
  UserActionTypes.LoadUsersFailed,
  props<{ error: string }>()
);
