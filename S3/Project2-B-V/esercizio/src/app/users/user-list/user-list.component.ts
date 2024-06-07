import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service.service';
import { iUser } from '../../models/i-user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: iUser[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data: iUser[]) => {
        this.users = data;
      },
      error => {
        console.error('Error loading users', error);
      }
    );
  }
}
