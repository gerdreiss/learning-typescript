import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './tasks.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }

  @Put('/:id/start')
  startTask(@Param('id') id: string): void {
    return this.tasksService.startTask(id);
  }

  @Put('/:id/finish')
  finishTask(@Param('id') id: string): void {
    return this.tasksService.finishTask(id);
  }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus,
  ): void {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
