import { Controller, Get } from '@nestjs/common';
import { get } from 'http';

@Controller('users')
export class UsersController {
  @Get()
  getRandomUser() {
    return 'user';
  }
}