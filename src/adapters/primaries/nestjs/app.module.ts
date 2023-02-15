import { Module } from '@nestjs/common';
import { AppController } from 'src/adapters/primaries/nestjs/app/app.controller';
import { AppService } from 'src/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
