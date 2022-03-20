import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskRepository } from './tasks.repository';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository) private taskRepository: TaskRepository,
  ) {}
  async getTasks(): Promise<Task[]> {
    return await this.taskRepository.find();
  }
  async getTask(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID '${id} not found.`);
    }
    return found;
  }
  createTask(title: string, description: string): Promise<Task> {
    return this.taskRepository.createTask(title, description);
  }
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
