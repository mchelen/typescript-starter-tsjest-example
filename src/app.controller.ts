import { Get, Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { printMsg } from 'tsjest-package-example';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return printMsg();
  }
}
