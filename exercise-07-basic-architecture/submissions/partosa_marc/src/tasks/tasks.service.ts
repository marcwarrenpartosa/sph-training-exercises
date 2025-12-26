import { Injectable } from '@nestjs/common';
import CreateTaskDto from './dto/create-task.dto';
import UpdateTaskDto from './dto/update-task.dto';
import ReadTaskDto from './dto/read-task.dto';

export type PaginatedTasks = {
    data: CreateTaskDto[];
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}

@Injectable()
export class TasksService {
    private tasks: CreateTaskDto[] = [ 
        {id: '1', title: "Task One", description: "This is task one desc", status: "PENDING", userId: "1"},
        {id: '2', title: "Task Two", description: "This is task two desc", status: "IN_PROGRESS", userId: "2"},
        {id: '3', title: "Task Three", description: "This is task three desc", status: "DONE", userId: "3"},
        {id: '4', title: "Task Four", description: "This is task four desc", status: "PENDING", userId: "1"},
        {id: '5', title: "Task Five", description: "This is task five desc", status: "IN_PROGRESS", userId: "2"},
        {id: '6', title: "Task Six", description: "This is task six desc", status: "DONE", userId: "3"},
        {id: '7', title: "Task Seven", description: "This is task seven desc", status: "PENDING", userId: "1"},
    ];
     

    getAllTasks(page: number = 1, limit: number = 10): PaginatedTasks {
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedTasks = this.tasks.slice(startIndex, endIndex);
        
        return {
            data: paginatedTasks,
            total: this.tasks.length,
            page,
            limit,
            totalPages: Math.ceil(this.tasks.length / limit)
        };
    }

    getTaskById(id: string): ReadTaskDto | undefined {
        return this.tasks.find(task => task.id === id);
    }

    getTasksByStatus(status: string): ReadTaskDto[] {
        return this.tasks.filter(task => task.status === status);
    }

    createTask(task: CreateTaskDto): CreateTaskDto {
        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): boolean {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks.length < initialLength;
    }

    updateTask(id: string, updatedTask: Partial<UpdateTaskDto>): UpdateTaskDto | undefined {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return undefined;
        }
        this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
        return this.tasks[taskIndex];
    }
}
