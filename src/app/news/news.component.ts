import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

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

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.fetchTopHeadlines();
  }

  fetchTopHeadlines(): void {
    this.newsService.getTopHeadlines().subscribe(
      (response) => {
        this.topHeadlines = response.articles;
      },
      (error) => {
        console.error('Error fetching top headlines:', error);
      }
    );
  }
 
  searchArticles(): void {
    if (this.searchTerm.trim() !== '') {
      window.scrollTo({ top: 0, behavior: 'smooth' });

      this.newsService.searchArticlesByKeyword(this.searchTerm).subscribe(
        (response) => {
          this.searchResults = response.articles;
        },
        (error) => {
          console.error('Error searching articles:', error);
        }
      );
    }
  }
}
