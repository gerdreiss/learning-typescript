import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}
  // getTasks(): Task[] {
  //   return this.tasks;
  // }
  async getTask(id: string): Promise<Task> {
    return await this.taskRepository.findOneByOrFail({ id });
  }
  // createTask(title: string, description: string): Task {
  //   const task: Task = {
  //     id: uuid(),
  //     title: title,
  //     description: description,
  //     status: TaskStatus.OPEN,
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }
  // deleteTask(id: string): void {
  //   const found = this.getTask(id);
  //   this.tasks = this.tasks.filter((task) => task.id !== found.id);
  // }
  // startTask(id: string): void {
  //   const task = this.getTask(id);
  //   if (task) {
  //     task.status = TaskStatus.IN_PROGRESS;
  //   }
  // }
  // finishTask(id: string): void {
  //   const task = this.getTask(id);
  //   if (task) {
  //     task.status = TaskStatus.DONE;
  //   }
  // }
  // updateTaskStatus(id: string, status: TaskStatus): Task {
  //   const task = this.getTask(id);
  //   if (task) {
  //     task.status = status;
  //   }
  //   return task;
  // }
  // findTasks(status?: TaskStatus, search?: string): Task[] {
  //   return this.tasks.filter(
  //     (task) =>
  //       (!status || task.status === status) &&
  //       (!search ||
  //         task.title.includes(search) ||
  //         task.description.includes(search)),
  //   );
  // }
}
