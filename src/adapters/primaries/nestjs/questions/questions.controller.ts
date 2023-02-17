import { Controller, Get } from '@nestjs/common';
import { RetrieveQuestionsUsecase } from 'src/domain/useCases/question/retrieve-questions.usecase';
import { RetrieveRandomQuestionUsecase } from 'src/domain/useCases/question/retrieve-random-question.usecase';
import { Question } from '../../../../domain/models/question.model';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly retrieveQuestionsUsecase: RetrieveQuestionsUsecase,
    private readonly retrieveRandomQuestionUsecase: RetrieveRandomQuestionUsecase,
  ) {}
  @Get()
  getQuestions(): Promise<Question[]> {
    return this.retrieveQuestionsUsecase.handle();
  }

  @Get('/random')
  async getRandomQuestion(): Promise<Question> {
    return this.retrieveRandomQuestionUsecase.handle();
  }
}
