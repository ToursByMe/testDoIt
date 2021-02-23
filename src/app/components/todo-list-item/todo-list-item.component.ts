import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'pr-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  // come home, instance of class
 @Input()
 todo: Todo | any; // gotta watch out for this!
  // fly away
 @Output()
 remove: EventEmitter<Todo> = new EventEmitter();
 @Output()
 toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodoComplete(todo: Todo){
    this.toggleComplete.emit(todo);
  }
  removeTodo(todo: Todo){
    this.remove.emit(todo);
  }
}
