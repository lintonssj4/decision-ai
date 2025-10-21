import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/databases/prisma.database';

@Injectable()
export class findOneScoreRepository {
  constructor(private readonly prisma: PrismaService) {}

  async getOne(id: string) {
    const score = await this.prisma.score.findUnique({
      where: { id: id },
    });
    return score;
  }
}
