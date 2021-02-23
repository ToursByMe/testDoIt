import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoDataService} from './todo-data.service';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
// No longer needed, now handled by TodoListHeaderComponent
 // newTodo: Todo = new Todo();
 title: string = "task";
  constructor(private todoDataService: TodoDataService) {
  }

  // No longer needed, now handled by TodoListHeaderComponent
  // addTodo() {
  //   this.todoDataService.addTodo(this.newTodo);
  //   this.newTodo = new Todo();
  // }

 // new method emmitted by todoList header
 onAddTodo(todo: Todo){
  this.todoDataService.addTodo(todo);
 }

 // new names since we add the todolist component
  onToggleTodoComplete(todo: Todo): void {
    this.todoDataService.toggleTodoComplete(todo);
  }
 // new names since we add the todolist component
  onRemoveTodo(todo: Todo | any, num?: number): void {
    this.todoDataService.deleteById(todo.id);
  }

  get todos() {
    return this.todoDataService.getThemAll();
  }

}
