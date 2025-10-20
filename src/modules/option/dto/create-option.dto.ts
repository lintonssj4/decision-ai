import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @IsString()
  @ApiProperty({
    description: 'Nome da opção',
    type: String,
  })
  name: string;
  @ApiProperty({
    description: 'Descrição da opção',
    type: [String],
  })
  description: string;

  @ApiProperty()
  scenarioId: string;
}
