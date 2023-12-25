import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import {MarkdownModule} from "ngx-markdown";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FeedComponent} from "./feed/feed.component";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({loader: HttpClient})
  ],
  providers: [],
  exports: [
    PostComponent,
    FeedComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
