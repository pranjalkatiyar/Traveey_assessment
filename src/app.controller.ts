
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


// no argumnet in controller 
// so your domaain will be http://localhost:3000
// to the root router
// if like products is passed as the argument
// then the domain will be http://localhost:3000/products
// if the users in the get then the 
// domain will be http://localhost:3000/products/users
// @Get will be triggered when the domain is called
@Controller()
export class AppController {

  // inject the service
  // so that the service can be used in the controller
  // the service is injected in the constructor
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
