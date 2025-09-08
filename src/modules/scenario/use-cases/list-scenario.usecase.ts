import { Injectable, Logger } from '@nestjs/common';
import { ListScenarioRepository } from '../repository/list-scenario.repository';

@Injectable()
export class ListScenarioUseCase {
  constructor(
    private readonly listScenarioRepository: ListScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const scenario = await this.listScenarioRepository.getAll();
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
