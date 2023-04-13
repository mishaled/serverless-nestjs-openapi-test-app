import { ApiProperty } from '@nestjs/swagger';
// import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCatDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  breed: string;
}

export class GetCatDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  breed: string;
}
