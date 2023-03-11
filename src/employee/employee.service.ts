import { FindOneOptions } from 'typeorm/browser/find-options/FindOneOptions';
import { Injectable ,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
 // import 


@Injectable()
export class EmployeeService {
// Employees:Employee[]=[];

constructor(
    @InjectRepository(Employee)
    private readonly employeeRepo:Repository<Employee>
    ){}

 async insertEmployee( name:string,email:string,phone:string,hireDate:Date,position:string):Promise<Employee>{
     // const newEmployee=new EmployeesService(id,title,desc,price);
    const newData=new Employee();
    newData.name=name;
    newData.email=email;
    newData.phone=phone;
    newData.hireDate=hireDate;
    newData.position=position;
    const id=await this.employeeRepo.save(newData);
     return id;
}

async getemployee():Promise<Employee[]>{
    return await this.employeeRepo.find();
}

async getSingleEmployee(id:number):Promise<Employee>{

    const result=await this.employeeRepo.findOne({
        where:{
            id:id
        }
    });
   
     if(!result)
    {
        throw new NotFoundException('Could not find Employee');
    }
    return result;
}

async updateEmployeeById(id:number,name:string,email:string,phone:string,hireDate:Date,position:string){
   const result=await this.employeeRepo.update(id,{
        name:name,
        email:email,
        phone:phone,
        hireDate:hireDate,
        position:position
   });
    if(result.affected===0)
    {
        throw new NotFoundException('Could not find Employee');
    }
    return "Updated Successfully";  
}

async removeEmployee(id:number){
     const result=await this.employeeRepo.delete(id);

    if(result.affected===0)
    {
        throw new NotFoundException('Could not find Employee');
    }

    return "Deleted Successfully";
}

}