import { Injectable } from '@angular/core';
import {Post} from "./models/post.model";

@Injectable({
  providedIn: 'root'
})
export class FeedService {
  private readonly INDEX: Post[] = [
    {
      author: "ernilsson",
      published: Date.parse("2023-12-25"),
      path: "assets/posts/demo.md",
      title: "Demo"
    },
  ];

  get(page: number): Post[] {
    if (page * 4 > this.INDEX.length) {
      return [];
    }
    return this.INDEX.slice(page * 4, Math.min(page * 4 + 4, this.INDEX.length));
  }
}
