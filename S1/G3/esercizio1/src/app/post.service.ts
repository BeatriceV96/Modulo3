import { Post } from './models/post.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
    tuttipost:Post[] = []

  constructor() { }
}
