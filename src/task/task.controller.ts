import { TaskService } from './task.service';
import { Controller ,Post,Body, Get, Param ,Patch, Delete } from '@nestjs/common';

@Controller('task')
export class TaskController {

        constructor(private taskService:TaskService){}

    @Post('add')
    async addEmployee(@Body() {title,description,dueDate,employeeId}:{title:string,description:string,dueDate:Date,employeeId:number})
    {
        const generatedId = this.taskService.insertTask(title,description,dueDate,employeeId);
        return generatedId;
    }

    @Get('all')
    async getAllTask(){
        const task=this.taskService.getAllTask();
        return task;
    }

    @Get(':id')
    async getSingleTask(@Param('id') taskId:number){
        const task =this.taskService.getTaskById(taskId); 
        return task;    
    }

    @Patch(':id')
    async updateTaskById(@Param('id') taskId:number ,
    @Body() {title,description,dueDate,employeeId}:{title:string,description:string,dueDate:Date,employeeId:number}){
        const msg=this.taskService.updateTaskById(taskId,title,description,dueDate,employeeId);
        return msg;
}

    @Delete(':id')
    async deleteTask(@Param('id') prodId:number){
        
        const msg=this.taskService.removeEmployee(prodId);
        return msg;
        
    }

}