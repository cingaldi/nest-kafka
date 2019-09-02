import { GenericCommand } from "src/commands/generic.command";
import { ICommandHandler, CommandHandler } from "@nestjs/cqrs";
import { Logger } from "@nestjs/common";

@CommandHandler(GenericCommand)
export class GenericCommandHandler implements ICommandHandler<GenericCommand> {
  constructor(
      private readonly logger : Logger
  ) {}

  async execute(command: GenericCommand) {
      this.logger.log(`handling command { id : ${command.id} , type : ${command.type} , message : ${command.message}}`)
  }
}