import { Injectable, Logger } from '@nestjs/common';
import { CreateScoreDto } from '../dto/create-score.dto';
import { CreateScoreRepository } from '../repository/create-score.repository';

@Injectable()
export class CreateScoreUseCase {
  constructor(
    private readonly createScoreRepository: CreateScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(data: CreateScoreDto) {
    try {
      const score = await this.createScoreRepository.create(data);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
