import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './employee/employee.module';
import {ConfigModule,ConfigService} from '@nestjs/config';
import {TypeOrmModule} from '@nestjs/typeorm';
import { TaskModule} from './task/task.module';

@Module({
  // imports to link module
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      useFactory:(configService:ConfigService)=>({
        type: 'postgres',
        host: configService.get('PGHOST'),
        port: configService.get('PGPORT'),
        username: configService.get('PGUSER'),
        password: configService.get('PGPASSWORD'),
        database: configService.get('PGDATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        autoLoadEntities: true,
    }),
    inject:[ConfigService],
  }),
    EmployeeModule,
    TaskModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
