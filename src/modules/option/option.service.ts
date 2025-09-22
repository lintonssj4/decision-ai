import { Injectable } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase } from './use-cases/create-option.use-case';
import { ListOptionUseCase } from './use-cases/list-option.use-case';
import { FindOneOptionUseCase } from './use-cases/findone-option.use-case';
import { RemoveOptionUseCase } from './use-cases/remove-option.use-case';
import { UpdateOptionUseCase } from './use-cases/update-option.use-case';

@Injectable()
export class OptionService {
  constructor(
    private readonly createOptionUseCase: CreateOptionUseCase,
    private readonly listOptionUseCase: ListOptionUseCase,
    private readonly findoneOptionUseCase: FindOneOptionUseCase,
    private readonly removeOptionUseCase: RemoveOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase,
  ) {}

  create(createOptionDto: CreateOptionDto) {
    return this.createOptionUseCase.execute(createOptionDto);
  }

  findAll() {
    return this.listOptionUseCase.execute();
  }

  findOne(id: string) {
    return this.findoneOptionUseCase.execute(id);
  }

  update(id: string, updateOptionDto: UpdateOptionDto) {
    return this.updateOptionUseCase.execute(id, updateOptionDto);
  }

  remove(id: string) {
    return this.removeOptionUseCase.execute(id);
  }
}
