// import { PrimaryColumnOptions } from './../../node_modules/typeorm/browser/decorator/columns/PrimaryColumn.d';
import {Column,Entity,ManyToOne,PrimaryGeneratedColumn} from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity()
export class Task{

    @PrimaryGeneratedColumn({
        type:'int',
        name:'id'
    })
    id:number;

    @Column({
        name:"title",
        nullable:false,
        default:'',
    })
    title:string;

    @Column({
        name:"description",
        nullable:false,
        default:'',
    })
    description:string;

    @Column({
        name:"dueDate",
        nullable:false,
     })
    dueDate:Date; 

    @ManyToOne(()=>Employee,employee=>employee.tasks,{onDelete:'CASCADE'})
    employee:Employee;
 }