import { Component, Input } from '@angular/core';
import { TaskType } from '../../types/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  @Input({ required: true }) task!: TaskType;
}
