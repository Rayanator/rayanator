import { Controller, Get, Post, Query } from '@nestjs/common';
import { RetrieveQuestionsUsecase } from 'src/domain/useCases/question/retrieve-questions.usecase';
import { RetrieveRandomQuestionUsecase } from 'src/domain/useCases/question/retrieve-random-question.usecase';
import { IsQuestionAnswerCorrect } from 'src/domain/useCases/question/is-question-answer-correct.usecase';
import { Question } from '../../../../domain/models/question.model';

@Controller('questions')
export class QuestionsController {
  constructor(
    private readonly retrieveQuestionsUsecase: RetrieveQuestionsUsecase,
    private readonly retrieveRandomQuestionUsecase: RetrieveRandomQuestionUsecase,
    private readonly isQuestionAnswerCorrect: IsQuestionAnswerCorrect,
  ) {}
  @Get()
  getQuestions(): Promise<Question[]> {
    return this.retrieveQuestionsUsecase.handle();
  }

  @Get('/random')
  async getRandomQuestion(): Promise<Question> {
    return this.retrieveRandomQuestionUsecase.handle();
  }

  @Post()
  async isQuestionAnswerValid(
    @Query('id') id: string,
    @Query('answer') answer: string,
  ): Promise<any> {
    return this.isQuestionAnswerCorrect.handle(id, answer);
  }
}
