import { Controller, Post, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GenericCommand } from './commands/generic.command';


@Controller()
export class AppController {
  constructor
  (
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly appService: AppService,
    private readonly logger : Logger
  ) {}

  @Post("/commands")
  getHello(): string {
    this.logger.log("sending command")
    this.commandBus.execute(new GenericCommand("abc", "sometype" , "bblabal"));

    return "OK";
  }
}
