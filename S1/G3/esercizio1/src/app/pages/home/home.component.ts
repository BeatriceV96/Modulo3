import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-json-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  postsArr: iPost[] = [];

  ngOnInit() {
    this.getPosts();
  }

  async getPosts() {
    const response = await fetch('../../../assets/db.json');
    const posts = <IJsonContent>await response.json();
    this.postsArr = posts.posts;
  }
}
