import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';
import { UserType } from '../user/user.model';

@Component({
  selector: 'app-tasks',
  imports: [Task],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() user?: UserType;
  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
