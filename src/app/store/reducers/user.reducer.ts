import { Action, createReducer, on } from '@ngrx/store';
import {
  addUser,
  loadUsers,
  loadUsersSuccess,
  removeUser,
  User,
} from '../actions/user.actions';

export interface UserState {
  users: User[];
  isLoading: boolean;
}

export const initialState: UserState = {
  users: [],
  isLoading: false,
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state: UserState, action: Action) => ({
    ...state,
    users: [...state.users, (action as ReturnType<typeof addUser>).user],
  })),
  on(removeUser, (state: UserState, action: Action) => ({
    ...state,
    users: state.users.filter(
      (user) => user.id !== (action as ReturnType<typeof removeUser>).id
    ),
  })),
  on(loadUsers, (state: UserState, action: Action) => ({
    ...state,
    isLoading: true,
  })),
  on(loadUsersSuccess, (state: UserState, action: Action) => ({
    ...state,
    isLoading: false,
    users: [
      ...state.users,
      ...(action as ReturnType<typeof loadUsersSuccess>).users,
    ],
  })),
  on(removeUser, (state: UserState, action: Action) => ({
    ...state,
    users: state.users.filter(
      (user) => user.id !== (action as ReturnType<typeof removeUser>).id
    ),
  }))
);
