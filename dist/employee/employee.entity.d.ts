import { Task } from '../task/task.entity';
export declare class Employee {
    id: number;
    name: string;
    email: string;
    phone: string;
    position: string;
    hireDate: Date;
    tasks: Task[];
}
