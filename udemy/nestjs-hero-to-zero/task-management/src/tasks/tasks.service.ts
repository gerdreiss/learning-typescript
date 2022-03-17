import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as uuid } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getTasks(): Task[] {
    return this.tasks;
  }

  getTask(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(title: string, description: string): Task {
    const task: Task = {
      id: uuid(),
      title: title,
      description: description,
      status: TaskStatus.OPEN,
    };
    this.tasks.push(task);
    return task;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  startTask(id: string): void {
    const task = this.getTask(id);
    if (task) {
      task.status = TaskStatus.IN_PROGRESS;
    }
  }

  finishTask(id: string): void {
    const task = this.getTask(id);
    if (task) {
      task.status = TaskStatus.DONE;
    }
  }

  updateTaskStatus(id: string, status: TaskStatus): Task {
    const task = this.getTask(id);
    if (task) {
      task.status = status;
    }
    return task;
  }

  findTasks(status?: TaskStatus, search?: string): Task[] {
    return this.tasks.filter(
      (task) =>
        (!status || task.status === status) &&
        (!search ||
          task.title.includes(search) ||
          task.description.includes(search)),
    );
  }
}
