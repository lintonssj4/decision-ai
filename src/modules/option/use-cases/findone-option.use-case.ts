import { Injectable, Logger } from '@nestjs/common';
import { findOneOptionRepository } from '../repository/findone-option.repository';

@Injectable()
export class FindOneOptionUseCase {
  constructor(
    private readonly findoneOptionRepository: findOneOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute(id: string) {
    try {
      const option = await this.findoneOptionRepository.getOne(id);
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
