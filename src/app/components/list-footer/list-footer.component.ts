import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'pr-list-footer',
  templateUrl: './list-footer.component.html',
  styleUrls: ['./list-footer.component.css']
})
export class ListFooterComponent implements OnInit {

  @Input() todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
