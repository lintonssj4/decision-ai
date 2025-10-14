import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateScenarioDto {
  @IsString()
  @ApiProperty()
  title: string;
  description: string;
}
