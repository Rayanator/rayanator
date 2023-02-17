import { QuestionRepository } from 'src/domain/repositories';
import { Question } from '../../../domain/models/question.model';
import { QuestionMapper } from './question.mapper';

export class InMemoryQuestionsRepository implements QuestionRepository {
  private questionMapper = new QuestionMapper();

  private questions: Question[] = [
    {
      name: 'questionTestName',
      id: '1',
      filters: ['geography'],
      wording: 'What is the capital of Canada?',
      answer: 'Ottawa',
      complexity: 2,
    },
    {
      name: 'questionTestName2',
      id: '2',
      filters: ['history'],
      wording: 'What is the first president of France 5th république?',
      answer: 'General de Gaulle',
      complexity: 3,
    },
    {
      name: 'hello',
      wording: 'what is the capital of Belgium ?',
      answer: 'Brussels',
      id: '3',
      complexity: 1,
      filters: ['geography'],
    },
    {
      wording: 'what is the capital of Italy ?',
      answer: 'Rome',
      id: '4',
      complexity: 1,
      name: 'fdgchvj',
      filters: ['geography'],
    },
    {
      wording: 'Who won the 2022 football golden ball?',
      answer: 'Benzema',
      id: '5',
      complexity: 1,
      filters: ['sport'],
      name: 'ghvj',
    },
  ];

  findRandomQuestion = async (): Promise<Question> => {
    const questionRandom = this.questions[Math.floor(Math.random() * 5)];
    return this.questionMapper.mapToDomainModel(questionRandom);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findById = async (id: string): Promise<Question> => this.questions[0];

  retrieveAll = async (): Promise<Question[]> => this.questions;
}
