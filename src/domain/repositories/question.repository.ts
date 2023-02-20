import { Question } from '../models/question.model';

export interface QuestionRepository {
  retrieveAll(): Promise<Question[]>;
  findRandomQuestion(): Promise<Question>;
  findById(id): Promise<Question>;
}
