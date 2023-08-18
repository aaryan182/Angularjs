import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[] = [
    {
      sno: 1,
      title: "Title 1",
      desc: "Description 1",
      active: true
    },
    {
      sno: 2,
      title: "Title 2",
      desc: "Description 2",
      active: true
    },
    {
      sno: 3,
      title: "Title 3",
      desc: "Description 3",
      active: true
    },

  ];
}
