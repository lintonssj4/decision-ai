import { Injectable } from '@nestjs/common';
import { CreateScoreDto } from './dto/create-score.dto';
import { UpdateScoreDto } from './dto/update-score.dto';
import { CreateScoreUseCase, FindOneScoreUseCase, ListScoreUseCase, RemoveScoreUseCase, UpdateScoreUseCase } from './use-cases';

@Injectable()
export class ScoreService {
  constructor(
    private readonly createScoreUseCase: CreateScoreUseCase,
    private readonly listScoreUseCase: ListScoreUseCase,
    private readonly findoneScoreUseCase: FindOneScoreUseCase,
    private readonly removeScoreUseCase: RemoveScoreUseCase,
    private readonly updateScoreUseCase: UpdateScoreUseCase,
  ) {}
  create(createScoreDto: CreateScoreDto) {
    return this.createScoreUseCase.execute(createScoreDto);
  }

  findAll() {
    return `This action returns all score`;
  }

  findOne(id: number) {
    return `This action returns a #${id} score`;
  }

  update(id: number, updateScoreDto: UpdateScoreDto) {
    return `This action updates a #${id} score`;
  }

  remove(id: number) {
    return `This action removes a #${id} score`;
  }
}
