import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodoDataService]
})
export class AppComponent {

  newTodo: Todo = new Todo();

  constructor(private todoDataService: TodoDataService) {
  }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    
  }

  toggleTodoComplete(todo: any): void {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: any): void {
    this.todoDataService.deleteById(todo.id);
  }

  get todos() {
    return this.todoDataService.getThemAll();
  }

}
