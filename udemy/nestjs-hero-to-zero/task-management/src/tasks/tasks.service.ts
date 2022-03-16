import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'buy milk',
      description: 'buy 1 liter of full-fat milk',
      status: TaskStatus.OPEN,
    },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }
}
