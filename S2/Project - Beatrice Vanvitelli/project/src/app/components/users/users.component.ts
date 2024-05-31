import { Component, Input } from '@angular/core';
import { User } from '../../Models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  @Input() user!: User;
  @Input() showImage: boolean = true;
}
