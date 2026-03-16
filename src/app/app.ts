import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from './dummy-users';

import { Header } from './header/header';
import { User } from './user/user';
import { Tasks } from './tasks/tasks';
import { UserType } from './types/user';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, User, Tasks],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('first-angular-project');

  users = DUMMY_USERS;

  selectedUser!: UserType | undefined;

  onSelectUser(id: string) {
    this.selectedUser = this.users.find((user) => user.id === id);
  }
}
