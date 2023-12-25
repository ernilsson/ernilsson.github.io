import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {MarkdownService} from "ngx-markdown";
import {Post} from "../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PostComponent {
  @Input({ required: true })
  post!: Post;
}
