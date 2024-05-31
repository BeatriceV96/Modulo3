import { Component } from '@angular/core';
import { Todo } from '../../Models/todo';
import { TodoService } from '../../services/todos.service';
import { User } from '../../Models/user';
import { UserService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  todoArr: Todo[] = [];
  userArr: User[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UserService) {}

  ngOnInit() {
    this.todoArr = this.todoSvc.todoArr;
    this.userArr = this.userSvc.userArr;
  }

  getUserById(userId: number): User | undefined {
    return this.userArr.find(user => user.id === userId);
  }

  updateTodoStatus(todo: Todo, event: any) {
    todo.completed = event.target.checked;
  }
}
