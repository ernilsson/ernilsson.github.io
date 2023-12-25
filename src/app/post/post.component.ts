import {Component, Input, OnInit} from '@angular/core';
import {MarkdownService} from "ngx-markdown";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input({ required: true })
  author!: string;

  @Input({ required: true })
  path!: string;

  content: string = "";

  constructor(private service: MarkdownService) {}

  ngOnInit() {
    this.service.getSource(this.path).subscribe(async data => {
        this.content = await this.service.parse(data);
    })
  }
}
