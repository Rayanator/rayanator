import { Module } from '@nestjs/common';
import { dependencies } from 'src/configuration/dependencies/dependencies';
import { QuestionsController } from './questions/questions.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [QuestionsController, UsersController],
  providers: [...dependencies],
})
export class AppModule {}
