import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { NewsListComponent } from './news-list/news-list.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, NewsComponent, NewsListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
