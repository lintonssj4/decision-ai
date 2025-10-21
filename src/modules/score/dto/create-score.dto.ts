import { IsString } from 'class-validator';

export class CreateScoreDto {
  @IsString()
  optionId: string;
  criterionId: string;
}
