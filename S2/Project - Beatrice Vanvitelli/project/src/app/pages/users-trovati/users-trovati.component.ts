import { Component } from '@angular/core';
import { User } from '../../Models/user';
import { UserService } from '../../services/users.service';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todos.service';

@Component({
  selector: 'app-users-trovati',
  templateUrl: './users-trovati.component.html',
  styleUrl: './users-trovati.component.scss'
})
export class UsersTrovatiComponent {
  userArr: User[] = [];
  todoArr: Todo[] = [];

  constructor(private userSvc: UserService, private todoSvc: TodoService) {}

  ngOnInit() {
    this.userArr = this.userSvc.userArr;
    this.todoArr = this.todoSvc.todoArr;
  }

  getTotalByUser(userId:number): number {
    return this.todoArr.filter(todo => todo.userId === userId).length //qui uso length per vedere il totale dei
  }
}
