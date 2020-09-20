import { Injectable } from '@nestjs/common';
import { Todo } from '../entities/todo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult } from 'typeorm/query-builder/result/DeleteResult';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class TodoService extends TypeOrmCrudService<Todo> {
  constructor(@InjectRepository(Todo) todoRepository) {
    super(todoRepository);
  }
}
