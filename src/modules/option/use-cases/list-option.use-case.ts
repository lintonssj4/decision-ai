import { Injectable, Logger } from '@nestjs/common';
import { ListOptionRepository } from '../repository/list-option.repository';

@Injectable()
export class ListOptionUseCase {
  constructor(
    private readonly listOptionRepository: ListOptionRepository,
    private readonly logger: Logger,
  ) {}

  async execute() {
    try {
      const option = await this.listOptionRepository.getAll();
      return option;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
