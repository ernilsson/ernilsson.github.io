import {Component, OnInit} from '@angular/core';
import {FeedService} from "../feed.service";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.scss'
})
export class FeedComponent implements OnInit {
  posts: Post[] = [];

  constructor(private service: FeedService) {
  }

  ngOnInit() {
    this.posts = this.service.get(0);
  }
}
