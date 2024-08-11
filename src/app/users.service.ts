import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './store/actions/user.actions';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUsers(): Observable<User[]> {
    let users: User[] = [];
    return new Observable<User[]>((subscriber) => {
      setTimeout(() => {
        users = [
          { id: Math.floor(Math.random() * 10000000), name: 'John', age: 33 },
          { id: Math.floor(Math.random() * 10000000), name: 'Jane', age: 26 },
          { id: Math.floor(Math.random() * 10000000), name: 'Adam', age: 26 },
        ];
        subscriber.next(users);
      }, 2000);
    });
  }
}
