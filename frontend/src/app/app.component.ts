import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITodo } from './ITodo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title = '';
  public todoList: ITodo[];
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  ngOnInit(): void {
    this.httpClient
      .get<ITodo[]>('http://localhost:3000/rest/todo')
      .subscribe(todoList => {
        this.todoList = todoList;
      });
  }

  onCreate(): void {
    if (this.title) {
      this.httpClient
        .post<ITodo>('http://localhost:3000/rest/todo', {
          title: this.title,
        })
        .subscribe(todo => {
          this.todoList.push(todo);
        });
      this.title = '';
    }
  }

  onRemove(todoOnDelete: ITodo): void {
    this.httpClient
      .delete<void>(`http://localhost:3000/rest/todo/${todoOnDelete.id}`)
      .subscribe(() => {
        this.todoList = this.todoList.filter(
          todo => todo.id !== todoOnDelete.id,
        );
      });
  }

  onComplete(todoOnCpmpleted: ITodo): void {
    this.httpClient
      .patch<ITodo>(`http://localhost:3000/rest/todo/${todoOnCpmpleted.id}`, {
        isCompleted: !todoOnCpmpleted.isCompleted,
      })
      .subscribe((updatedTodo: ITodo) => {
        this.todoList = this.todoList.map(todo =>
          todo.id !== updatedTodo.id ? todo : updatedTodo,
        );
      });
  }
}
