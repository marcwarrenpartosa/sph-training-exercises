import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { Task } from './task';

@Module({
  controllers: [TaskController],
  providers: [Task]
})
export class TaskModule {}
