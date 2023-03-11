import { EmployeeService } from './employee.service';
import { Controller ,Post,Body, Get, Param ,Patch, Delete } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {

        constructor(private employeService:EmployeeService){}

    @Post('add')
    async addEmployee(@Body() {name,email,phone,hireDate,position}:{name:string,email:string,phone:string,hireDate:Date,position:string})
    {
        const generatedId = this.employeService.insertEmployee(name,email,phone,hireDate,position);
        return generatedId;
    }

    @Get('all')
    async getAllemployee(){
        const employee=this.employeService.getemployee();
        return employee;
    }

    @Get(':id')
    async getEmployee(@Param('id') prodId:number){
        const employee=this.employeService.getSingleEmployee(prodId); 
        return employee;    
    }

    @Patch(':id')
    async updateEmployee(@Param('id') prodId:number ,
    @Body() {name,email,phone,hireDate,position}:{name:string,email:string,phone:string,hireDate:Date,position:string}){
        const msg=this.employeService.updateEmployeeById(prodId,name,email,phone,hireDate,position);
        return msg;
}

    @Delete(':id')
    async deleteEmployee(@Param('id') prodId:number){
        
        const msg=this.employeService.removeEmployee(prodId);
        return msg;
        
    }

}