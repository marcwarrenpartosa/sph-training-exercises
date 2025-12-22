import { Injectable } from '@nestjs/common';

export type Task = {
    id: string; 
    title: string;
    description: string;
    status: string;
    userId: string;
}

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        {id: '1', title: "Task One", description: "This is task one desc", status: "PENDING", userId: "1"},
        {id: '2', title: "Task Two", description: "This is task two desc", status: "IN_PROGRESS", userId: "2"},
        {id: '3', title: "Task Three", description: "This is task three desc", status: "DONE", userId: "3"},
    ];

    getAllTasks(){
        return this.tasks;
    }

    getTaskById(id: string): Task | undefined {
        return this.tasks.find(task => task.id === id);
    }

    getTasksByStatus(status: string): Task[] {
        return this.tasks.filter(task => task.status === status);
    }

    createTask(task: Task): Task {
        this.tasks.push(task);
        return task;
    }

    deleteTask(id: string): boolean {
        const initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(task => task.id !== id);
        return this.tasks.length < initialLength;
    }

    updateTask(id: string, updatedTask: Partial<Task>): Task | undefined {
        const taskIndex = this.tasks.findIndex(task => task.id === id);
        if (taskIndex === -1) {
            return undefined;
        }
        this.tasks[taskIndex] = { ...this.tasks[taskIndex], ...updatedTask };
        return this.tasks[taskIndex];
    }
}
