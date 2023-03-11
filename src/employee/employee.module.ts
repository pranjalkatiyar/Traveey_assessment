import { Task } from './../task/task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { EmployeeController } from "./employee.controller";
import { EmployeeService } from "./employee.service";
// import { employee } from "src/typeorm/entities/employee.entity";"";
import { Employee } from "./employee.entity";
@Module({
    imports:[TypeOrmModule.forFeature ([Employee,Task])],
     controllers:[EmployeeController],
    providers:[EmployeeService]
})

export class EmployeeModule{}