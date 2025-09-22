import { Injectable, Logger } from '@nestjs/common';
import { UpdateOptionDto } from '../dto/update-option.dto';
import { UpdateOptionRepository } from '../repository/update-option.repository';

@Injectable()
export class UpdateOptionUseCase {
  constructor(
    private readonly updateOptionRepository: UpdateOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string, data: UpdateOptionDto) {
    try {
      const option = await this.updateOptionRepository.update(id, data);
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
