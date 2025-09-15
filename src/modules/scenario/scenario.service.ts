import { Injectable } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import {
  CreateScenarioUseCase,
  ListScenarioUseCase,
  findOneScenarioUseCase,
  RemovecenarioUseCase,
  UpdateScenarioUseCase,
} from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(
    private readonly createScenarioUseCase: CreateScenarioUseCase,
    private readonly listScenarioUseCase: ListScenarioUseCase,
    private readonly FindOneScenarioUseCase: findOneScenarioUseCase,
    private readonly removeScenarioUseCase: RemovecenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase,
  ) {}

  create(createScenarioDto: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(createScenarioDto);
  }

  findAll() {
    return this.listScenarioUseCase.execute();
  }

  findOne(id: string) {
    return this.FindOneScenarioUseCase.execute(id);
  }

  update(id: string, updateScenarioDto: UpdateScenarioDto) {
    return this.updateScenarioUseCase.execute(id, updateScenarioDto);
  }

  remove(id: string) {
    return this.removeScenarioUseCase.execute(id);
  }
}
