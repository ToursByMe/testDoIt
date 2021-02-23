import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'pr-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  // what bring here
  @Input()
  todos: Todo | any;

  // events to the html
  @Output()
  remove: EventEmitter<Todo> = new EventEmitter();

  @Output()
  toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor( ) { }

  ngOnInit(): void {
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
