import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewsService } from '../service/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  topHeadlines: any[] = [];
  searchResults: any[] = [];
  searchTerm: string = '';
  loading: boolean = false;
  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchTopHeadlines();
  }

  //function to fetch the topheadlines
  fetchTopHeadlines(): void {
    this.loading = true;
    this.newsService.getTopHeadlines().subscribe(
      (response) => {
        this.topHeadlines = response.articles;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching top headlines:', error);
        this.loading = false;
      }
    );
  }

  //function to get news by keywords
  searchArticles(): void {
    if (this.searchTerm.trim() !== '') {
      this.loading = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });

      this.newsService.searchArticlesByKeyword(this.searchTerm).subscribe(
        (response) => {
          this.searchResults = response.articles;
          this.loading = false;
        },
        (error) => {
          console.error('Error searching articles:', error);
          this.loading = false;
        }
      );
    }
  }
}
