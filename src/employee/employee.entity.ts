// import { PrimaryColumnOptions } from './../../node_modules/typeorm/browser/decorator/columns/PrimaryColumn.d';
import {Column,Entity,ManyToOne,OneToMany,PrimaryGeneratedColumn} from 'typeorm';
import { Task } from '../task/task.entity';

@Entity()
export class Employee{

    @PrimaryGeneratedColumn({
        type:'int',
        name:'id'
    })
    id:number;

    @Column({
        name:"name",
        nullable:false,
        default:'',
    })
    name:string;

    @Column({
        name:"email",
        nullable:false,
        default:'',
    })
    email:string;

    @Column({
        name:"phone",
        nullable:false,
        default:0,
    })
    phone:string;

    @Column({
        name:"position",
        nullable:false,
        default:'',
    })
    position:string;

    @Column({
        name:'hireDate',
         type:'date',
     })
    hireDate:Date;    

    @OneToMany(()=>Task,task=>task.employee)
    tasks:Task[];
}
