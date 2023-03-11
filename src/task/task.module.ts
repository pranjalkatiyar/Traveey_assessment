import { Employee } from './../employee/employee.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from "@nestjs/common";
import { TaskController } from "./task.controller";
import { TaskService } from "./task.service";
// import { employee } from "src/typeorm/entities/employee.entity";"";
import { Task } from "./task.entity";
@Module({
    imports:[TypeOrmModule.forFeature ([Task,Employee])],
     controllers:[TaskController],
    providers:[TaskService]
})

export class TaskModule{}