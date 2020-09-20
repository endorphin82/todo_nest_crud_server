import {Injectable} from '@nestjs/common';
import {Todo} from '../entities/todo.entity';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {DeleteResult} from 'typeorm/query-builder/result/DeleteResult';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  create(todo: Todo): Promise<Todo> {
    delete todo.id;
    return this.todoRepository.save(todo);
  }

  async update(todo: Todo): Promise<Todo> {
    return this.todoRepository.save(todo);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.todoRepository.delete(id);
  }
}
