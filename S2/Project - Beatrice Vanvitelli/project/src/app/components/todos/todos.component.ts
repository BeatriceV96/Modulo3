import { Component, Input } from '@angular/core';
import { Todo } from '../../Models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})
export class TodosComponent {

    @Input() todos!: Todo
}
