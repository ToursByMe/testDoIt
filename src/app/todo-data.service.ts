import { Injectable } from '@angular/core';

import {Todo} from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {
  // declaration x last id, so we can add ids
  lastId: number = 0;

  // container for todos, empty arr
  todos: Todo[] = [];

  // container for returns
  getBack: any;
  constructor() { }

  // Simulate POST /todos
  addTodo(todo: Todo): TodoDataService {
    // one function, one return
    (!todo.id) ? this.getBack = ++this.lastId : this.getBack = this.todos.push(todo);
    console.log(this.todos);
    return this.getBack;
  }
  // Simulate DELETE /todos/:id
  deleteById(id: number): TodoDataService {
    //  check if id provided matches id arr
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }
  // simulate GET by id /todos/:id
  getTodoById(id: number): Todo{
    let findTodo: Todo | undefined | any = this.todos.filter(todo => todo.id === id).pop();
    return findTodo;
  }
  // simulate PUT /todos/:id update
  updateById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      this.getBack = null
     }
      Object.assign(todo, values);
      this.getBack = todo;

    return this.getBack;
  }
  // GET them all
  getThemAll(): Todo[]{
    // get me the whole array
    return this.todos;
  }
  
  // Toggle todo complete
  toggleTodoComplete(todo: Todo | any){
    let updatedTodo = this.updateById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }

}
