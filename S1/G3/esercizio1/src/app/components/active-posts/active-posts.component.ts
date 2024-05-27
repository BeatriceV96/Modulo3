import { Component, Input } from '@angular/core';
import { Post } from 'src/app/models/post.interface';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {
    @Input() posts: Post[] = [];


}
