import { IsString } from 'class-validator';

export class UfBr {

  @IsString()
  uf?: string;

  @IsString()
  estado?: string;
}
