import { Injectable, Logger } from '@nestjs/common';
import { FindOneScenarioRepository } from '../repository/findone-scenario.repository';

@Injectable()
export class findOneScenarioUseCase {
  constructor(
    private readonly listScenarioRepository: FindOneScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const scenario = await this.listScenarioRepository.getAll();
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
