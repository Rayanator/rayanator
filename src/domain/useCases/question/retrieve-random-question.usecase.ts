import { Question } from '../../models/question.model';
import { QuestionRepository } from '../../repositories';

export class RetrieveRandomQuestionUsecase {
  constructor(private readonly questionRepository: QuestionRepository) {}

  handle = async (): Promise<Question> =>
    this.questionRepository.findRandomQuestion();
}
