import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {
  @Input({ required: true })
  author!: String;

  @Input({ required: true })
  publishedDate!: Date;

  formattedPublicationDate(): String {
    return `${this.publishedDate.getDay()}-${this.publishedDate.getMonth()}-${this.publishedDate.getFullYear()}`
  }
}
