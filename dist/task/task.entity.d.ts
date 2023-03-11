import { Employee } from '../employee/employee.entity';
export declare class Task {
    id: number;
    title: string;
    description: string;
    dueDate: Date;
    employee: Employee;
}
