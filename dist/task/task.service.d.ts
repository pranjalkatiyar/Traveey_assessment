import { Task } from './task.entity';
import { Repository } from 'typeorm';
export declare class TaskService {
    private readonly TaskRepo;
    constructor(TaskRepo: Repository<Task>);
    insertTask(title: string, description: string, dueDate: Date, employeeId: number): Promise<Task>;
    getTaskById(id: number): Promise<Task>;
    getAllTask(): Promise<Task[]>;
    updateTaskById(id: number, title: string, description: string, dueDate: Date, employeeId: number): Promise<string>;
    removeEmployee(id: number): Promise<string>;
}
