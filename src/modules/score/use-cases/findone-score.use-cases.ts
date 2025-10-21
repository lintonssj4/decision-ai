import { Injectable, Logger } from '@nestjs/common';
import { findOneScoreRepository } from '../repository/findone-score.repository';

@Injectable()
export class FindOneScoreUseCase {
  constructor(
    private readonly findoneScoreRepository: findOneScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const score = await this.findoneScoreRepository.getOne(id);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
