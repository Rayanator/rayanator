import { Controller, Get } from '@nestjs/common';

@Controller('questions')
export class QuestionsController {
  @Get()
  getRandomQuestion() {
    return 'question random';
  }
}
