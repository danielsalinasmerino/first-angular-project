import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserType } from '../types/user';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css'],
})
export class User {
  @Input({ required: true }) user!: UserType;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
