import { EmployeeService } from './employee.service';
export declare class EmployeeController {
    private employeService;
    constructor(employeService: EmployeeService);
    addEmployee({ name, email, phone, hireDate, position }: {
        name: string;
        email: string;
        phone: string;
        hireDate: Date;
        position: string;
    }): Promise<import("./employee.entity").Employee>;
    getAllemployee(): Promise<import("./employee.entity").Employee[]>;
    getEmployee(prodId: number): Promise<import("./employee.entity").Employee>;
    updateEmployee(prodId: number, { name, email, phone, hireDate, position }: {
        name: string;
        email: string;
        phone: string;
        hireDate: Date;
        position: string;
    }): Promise<string>;
    deleteEmployee(prodId: number): Promise<string>;
}
