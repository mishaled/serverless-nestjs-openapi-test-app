import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';
import catsDb from './cats.db';
import { CreateCatDto, GetCatDto } from './create-cat.dto';

class Status {
  @ApiProperty()
  status: string;
}

@Controller('cats')
export class CatsController {
  @Post()
  @ApiResponse({
    type: Status,
    isArray: false,
  })
  create(@Body() createCatDto: CreateCatDto): Promise<Status> {
    const id = catsDb.create(createCatDto);
    return Promise.resolve({ status: `This action adds a new cat: ${id}` });
  }

  @Get(':id')
  @ApiResponse({
    type: GetCatDto,
  })
  findOne(@Param('id') id: string): Promise<GetCatDto> {
    return Promise.resolve(catsDb.read(id));
  }

  @Get()
  @ApiResponse({
    type: GetCatDto,
    isArray: true,
  })
  findAll(): Promise<GetCatDto[]> {
    return Promise.resolve(catsDb.readAll());
  }

  @Delete(':id')
  @ApiResponse({
    type: String,
  })
  remove(@Param('id') id: string): Promise<string> {
    catsDb.remove(id);
    return Promise.resolve(`This action removes a #${id} cat`);
  }
}
