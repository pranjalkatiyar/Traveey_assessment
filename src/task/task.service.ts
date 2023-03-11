import { Task } from './task.entity';
 import { Injectable ,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
  // import 


@Injectable()
export class TaskService {
// Employees:Employee[]=[];

constructor(
    @InjectRepository(Task)
    private readonly TaskRepo:Repository<Task>
    ){}

 async insertTask( title:string,description:string,dueDate:Date,employeeId:number):Promise<Task>{
    const newData=new Task();
    newData.title=title;
    newData.description=description;
    newData.dueDate=dueDate;
    newData.employee={id:employeeId} as any ;
    const id=await this.TaskRepo.save(newData);
     return id;
}

async getTaskById(id:number):Promise<Task>{
    const task=await this.TaskRepo.findOne({
        where:{
            id:id
        },
        relations:['employee'],
    });
    if(!task)
    {
        throw new NotFoundException('Could not find Task');
    }
    return task;
}

async getAllTask():Promise<Task[]>{

    const result=await this.TaskRepo.find({relations:['employee']});
   
     if(!result)
    {
        throw new NotFoundException('Could not find Employee');
    }
    return result;
}

async updateTaskById(id:number,title:string,description:string,dueDate:Date,employeeId:number){
   const result=await this.TaskRepo.update(id,{
        title:title,
        description:description,
        dueDate:dueDate,
        employee:{id:employeeId} as any,
   });
    if(result.affected===0)
    {
        throw new NotFoundException('Could not find Employee');
    }
    return "Updated Successfully";  
}

async removeEmployee(id:number){
     const result=await this.TaskRepo.delete(id);

    if(result.affected===0)
    {
        throw new NotFoundException('Could not find Employee');
    }
    return "Deleted Successfully";
}

}