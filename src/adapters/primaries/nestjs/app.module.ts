import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { QuestionsController } from './questions/questions.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [QuestionsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
