import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { User } from '../../Models/user';
import { TodoService } from '../../services/todos.service';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-todo-completes',
  templateUrl: './todo-completes.component.html',
  styleUrl: './todo-completes.component.scss'
})
export class TodoCompletesComponent {

  todoArr: Todo [] = []
  userArr: User[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todoArr = this.todoSvc.todoArr;
    this.userArr = this.userSvc.userArr;
  }
}
