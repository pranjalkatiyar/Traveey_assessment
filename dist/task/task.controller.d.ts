import { TaskService } from './task.service';
export declare class TaskController {
    private taskService;
    constructor(taskService: TaskService);
    addEmployee({ title, description, dueDate, employeeId }: {
        title: string;
        description: string;
        dueDate: Date;
        employeeId: number;
    }): Promise<import("./task.entity").Task>;
    getAllTask(): Promise<import("./task.entity").Task[]>;
    getSingleTask(taskId: number): Promise<import("./task.entity").Task>;
    updateTaskById(taskId: number, { title, description, dueDate, employeeId }: {
        title: string;
        description: string;
        dueDate: Date;
        employeeId: number;
    }): Promise<string>;
    deleteTask(prodId: number): Promise<string>;
}
