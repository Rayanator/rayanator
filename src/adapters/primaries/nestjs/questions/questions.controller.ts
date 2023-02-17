import { Controller, Get } from '@nestjs/common';
import { RetrieveQuestionsUsecase } from 'src/domain/useCases/question/retrieve-questions.usecase';
import { Question } from '../../../../domain/models/question.model';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly retrieveQuestionsUsecase: RetrieveQuestionsUsecase,
  ) {}
  @Get()
  getQuestions(): Promise<Question[]> {
    return this.retrieveQuestionsUsecase.handle();
  }
}
