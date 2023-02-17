import { Question } from 'src/domain/models/question.model';

export class QuestionMapper {
  mapToDomainModel = (question: Question): Question => {
    if (
      question.name === undefined ||
      question.id === undefined ||
      question.filters === undefined ||
      question.wording === undefined
    )
      throw new Error();

    return {
      name: question.name,
      id: question.id,
      filters: question.filters,
      wording: question.wording,
    };
  };
}
