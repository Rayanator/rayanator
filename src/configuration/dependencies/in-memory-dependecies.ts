import { Provider } from '@nestjs/common';
import { InMemoryQuestionsRepository } from 'src/adapters/secondaries/questions/in-memory-question.repository';
import { RetrieveQuestionsUsecase } from 'src/domain/useCases/question/retrieve-questions.usecase';
import { RetrieveRandomQuestionUsecase } from 'src/domain/useCases/question/retrieve-random-question.usecase';
import { IsQuestionAnswerCorrect } from 'src/domain/useCases/question/is-question-answer-correct.usecase';
import { QuestionRepository } from '../../domain/repositories';

const questionRepositoryProvider = <T>(repository: T): Provider<T> => ({
  provide: InMemoryQuestionsRepository,
  useValue: repository,
});

const retrieveQuestionsUsecase = {
  provide: RetrieveQuestionsUsecase,
  useFactory: (questionRepository: QuestionRepository) =>
    new RetrieveQuestionsUsecase(questionRepository),
  inject: [InMemoryQuestionsRepository],
};

const retrieveRandomQuestionUsecase = {
  provide: RetrieveRandomQuestionUsecase,
  useFactory: (questionRepository: QuestionRepository) =>
    new RetrieveRandomQuestionUsecase(questionRepository),
  inject: [InMemoryQuestionsRepository],
};

const isQuestionAnswerCorrect = {
  provide: IsQuestionAnswerCorrect,
  useFactory: (questionRepository: QuestionRepository) =>
    new IsQuestionAnswerCorrect(questionRepository),
  inject: [InMemoryQuestionsRepository],
};

export const inMemoryDependencies: any[] = [
  questionRepositoryProvider(new InMemoryQuestionsRepository()),
  retrieveQuestionsUsecase,
  retrieveRandomQuestionUsecase,
  isQuestionAnswerCorrect,
];
