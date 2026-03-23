import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';
import { UserType } from '../types/user';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() user?: UserType;
  allTasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.allTasks.filter((task) => task.userId === this.user?.id);
  }
}
