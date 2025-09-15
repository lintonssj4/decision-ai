import { Injectable, Logger } from '@nestjs/common';
import { RemoveScenarioRepository } from '../repository/remove-scenario.repository';

@Injectable()
export class RemovecenarioUseCase {
  constructor(
    private readonly removeScenarioRepository: RemoveScenarioRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const scenario = await this.removeScenarioRepository.remove(id);
      return scenario;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
