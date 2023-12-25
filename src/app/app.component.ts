import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ernilsson.github.io';
  post = {
    author: "ernilsson",
    date: new Date()
  };
}
