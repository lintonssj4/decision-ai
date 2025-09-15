import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../shared/databases/prisma.database';
import { UpdateScenarioDto } from '../dto/update-scenario.dto';

@Injectable()
export class UpdateScenarioRepository {
  constructor(private readonly prisma: PrismaService) {}

  async update(id: string, data: UpdateScenarioDto) {
    const scenario = await this.prisma.scenario.update({
      data,
      where: { id: id },
    });
    return scenario;
  }
}
