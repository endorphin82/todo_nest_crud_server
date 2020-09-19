import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateDto, UpdateDto } from './dto';

@Controller('rest/todo')
export class TodoController {
  @Get()
  getAllAction(): string {
    return 'Todo Get All';
  }

  @Get(':id')
  getOneAction(@Param('id') id: string): string {
    return `Todo Get One By Id ${id}`;
  }

  @Post()
  createAction(@Body() todo: CreateDto): CreateDto {
    console.log(todo);
    return todo;
  }

  @Put(':id')
  updateAction(
    @Param('id') id: string,
    @Body() todo: UpdateDto
  ): UpdateDto {
    console.log('Search by ID ', id);
    console.log(todo, 'saved');
    return todo;
  }

  @Delete(':id')
  deleteAction(@Param('id') id: string): string {
    return `Delete One Todo By Id ${id}`;
  }
}
