import { Controller, Get, Post, Delete, Put, Param, Body, Headers, UnauthorizedException, Query } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { UsersService } from '../users/users.service';
import ReadTaskDto, { PaginatedTasksDto } from './dto/read-task.dto';
import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';


@Controller('tasks')
export class TasksController {

    constructor(
        private readonly tasksService: TasksService,
        private readonly usersService: UsersService
    ) {}

    private verifyAuthorization(authorization: string | undefined): void {
        //no token
        if (!authorization) {
            throw new UnauthorizedException('Authorization header is required');
        }
        const token = authorization.replace('Bearer ', '');
        const userId = this.usersService.verifyToken(token);


        //invalid token
        if (!userId) {
            throw new UnauthorizedException('Invalid token');
        }
    }

    @Get()
    getAllTasks(
        @Headers('authorization') authorization: string,
        @Query('page') page?: string,
        @Query('limit') limit?: string
    ): PaginatedTasksDto {
        this.verifyAuthorization(authorization);
        const pageNum = page ? parseInt(page, 10) : 1;
        const limitNum = limit ? parseInt(limit, 10) : 10;
        return this.tasksService.getAllTasks(pageNum, limitNum);
    }

    @Get('status/:status')
    getTasksByStatus(@Param('status') status: string, @Headers('authorization') authorization: string): ReadTaskDto[] {
        this.verifyAuthorization(authorization);
       return this.tasksService.getTasksByStatus(status);
    }

    @Get(':id')
    getTaskById(@Param('id') id: string, @Headers('authorization') authorization: string): ReadTaskDto | undefined {
        this.verifyAuthorization(authorization);
        return this.tasksService.getTaskById(id);
    }

    @Post()
    createTask(@Body() task: CreateTaskDto, @Headers('authorization') authorization: string): CreateTaskDto {
       this.verifyAuthorization(authorization);
       return this.tasksService.createTask(task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string, @Headers('authorization') authorization: string): { success: boolean } {
        const task = this.tasksService.getTaskById(id);
        if (!task) {
            throw new UnauthorizedException('Task not found');
        }
        this.verifyAuthorization(authorization);
        const success = this.tasksService.deleteTask(id);
        return { success };
    }

    @Put(':id')
    updateTask(@Param('id') id: string, @Body() updatedTask: Partial<UpdateTaskDto>, @Headers('authorization') authorization: string): UpdateTaskDto | undefined {
        const task = this.tasksService.getTaskById(id);
        if (!task) {
            throw new UnauthorizedException('Task not found');
        }
        this.verifyAuthorization(authorization);
        return this.tasksService.updateTask(id, updatedTask);
    }
}
