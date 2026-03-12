import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './header/header';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet, User],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('first-angular-project');
}
