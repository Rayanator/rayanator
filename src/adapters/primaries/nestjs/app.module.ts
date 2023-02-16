import { Module } from '@nestjs/common';
import { QuestionsController } from './questions/questions.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [QuestionsController, UsersController],
  providers: [],
})
export class AppModule {}
