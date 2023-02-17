import { Question } from '../models/question.model';

export interface QuestionRepository {
  retrieveAll(): Promise<Question[]>;
}
