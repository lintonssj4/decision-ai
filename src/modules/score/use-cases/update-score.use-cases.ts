import { Injectable, Logger } from '@nestjs/common';
import { UpdateScoreDto } from '../dto/update-score.dto';
import { UpdateScoreRepository } from '../repository/update-score.repository';

@Injectable()
export class UpdateScoreUseCase {
  constructor(
    private readonly updatescoreRepository: UpdateScoreRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateScoreDto) {
    try {
      const score = await this.updatescoreRepository.update(id, data);
      return score;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
