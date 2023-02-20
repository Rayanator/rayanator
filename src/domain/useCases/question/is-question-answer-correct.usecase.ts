import { QuestionRepository } from '../../repositories';

export class IsQuestionAnswerCorrect {
  constructor(private readonly questionRepository: QuestionRepository) {}

  handle = async (id: string, answer: string): Promise<string> => {
    const question = await this.questionRepository.findById(id);
    console.log(question);
    if (question.answer === answer) {
      return 'true';
    } else return 'false';
  };
}
