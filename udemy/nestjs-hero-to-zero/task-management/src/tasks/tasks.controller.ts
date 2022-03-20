import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
    // if (Object.keys(filterDto).length) {
    //   return this.tasksService.findTasks(filterDto.status, filterDto.search);
    // }
    return this.tasksService.getTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTask(id);
  }
  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(
      createTaskDto.title,
      createTaskDto.description,
    );
  }
  @Delete('/:id')
  asyncdeleteTask(@Param('id') id: string): Promise<DeleteResult> {
    return this.tasksService.deleteTask(id);
  }
  // @Put('/:id/start')
  // startTask(@Param('id') id: string): void {
  //   return this.tasksService.startTask(id);
  // }
  // @Put('/:id/finish')
  // finishTask(@Param('id') id: string): void {
  //   return this.tasksService.finishTask(id);
  // }
  // @Patch('/:id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  // ): Task {
  //   return this.tasksService.updateTaskStatus(id, updateTaskStatusDto.status);
  // }
}
