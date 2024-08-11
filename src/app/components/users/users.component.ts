import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  addUser,
  loadUsers,
  removeUser,
  User,
} from '../../store/actions/user.actions';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  users: User[] | undefined;

  constructor(private store: Store<AppState>) {
    store
      .select((state) => state.users)
      .subscribe((data) => {
        this.users = data.users;
      });
  }

  addNewUser() {
    this.store.dispatch(
      addUser({
        user: {
          id: Math.floor(Math.random() * 1000000),
          name: 'test',
          age: 10,
        },
      })
    );
  }

  laodUsers() {
    this.store.dispatch(loadUsers());
  }

  removeUser(userId: number) {
    this.store.dispatch(removeUser({ id: userId }));
  }
}
