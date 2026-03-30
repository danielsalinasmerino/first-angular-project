import { Component, Input } from '@angular/core';
import { Task } from './task/task';
import { DUMMY_TASKS } from '../dummy-tasks';
import { UserType } from '../user/user.model';
import { NewTask } from './new-task/new-task';
import { NewTaskDataType } from './new-task/new-task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() user?: UserType;

  isAddingTask = false;

  tasks = DUMMY_TASKS;

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user?.id);
  }

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskDataType) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: this.user!.id,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });

    this.isAddingTask = false;
  }
}
