import { userReducer, UserState } from './user.reducer';

export interface AppState {
  users: UserState;
}

export const reducers = {
  users: userReducer,
};
