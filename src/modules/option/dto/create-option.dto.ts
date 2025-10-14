import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOptionDto {
  @IsString()
  @ApiProperty()
  name: string;
  description: string;
  scenarioId: string;
}
