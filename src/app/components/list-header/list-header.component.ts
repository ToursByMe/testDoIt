import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../todo';
@Component({
  selector: 'pr-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.css']
})
export class ListHeaderComponent implements OnInit {
// properties
newTodo: Todo = new Todo;

// evenEmitter
@Output()
add: EventEmitter<Todo> = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }
  // addTodo
  addTodo(): void {
    // you get out
    this.add.emit(this.newTodo);
    // instanciamos objeto
    this.newTodo = new Todo();
    console.log(this.newTodo);
  }
}
