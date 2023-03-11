import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
export declare class EmployeeService {
    private readonly employeeRepo;
    constructor(employeeRepo: Repository<Employee>);
    insertEmployee(name: string, email: string, phone: string, hireDate: Date, position: string): Promise<Employee>;
    getemployee(): Promise<Employee[]>;
    getSingleEmployee(id: number): Promise<Employee>;
    updateEmployeeById(id: number, name: string, email: string, phone: string, hireDate: Date, position: string): Promise<string>;
    removeEmployee(id: number): Promise<string>;
}
