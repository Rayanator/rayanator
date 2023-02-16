import { Controller, Get } from '@nestjs/common';

@Controller('questions')
export class QuestionsController {
  @Get()
  getHello(): string {
    return 'Hello';
  }
}
