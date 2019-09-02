import {Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CqrsModule } from '@nestjs/cqrs';
import { CommandHandlers } from './commandHandlers';


@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    AppService, 
    Logger,
    ...CommandHandlers
  ],
})
export class AppModule {}
