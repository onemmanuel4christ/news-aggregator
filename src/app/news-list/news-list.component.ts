import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent {
  //accepting articles from parents using input decorator
  @Input() articles: any[] = [];

  // declaring variables
  displayedArticles: any[] = [];
  currentPage: number = 1;
  articlesPerPage: number = 10;

  constructor() {}

  ngOnChanges(): void {
    this.updateDisplayedArticles();
  }

  //function to update the articles
  updateDisplayedArticles(): void {
    const startIndex = (this.currentPage - 1) * this.articlesPerPage;
    this.displayedArticles = this.articles.slice(
      startIndex,
      startIndex + this.articlesPerPage
    );
  }


  // function to go to next page

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedArticles();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  // function to go to Prev page

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedArticles();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  // function to get total pages
  get totalPages(): number {
    return Math.ceil(this.articles.length / this.articlesPerPage);
  }
}
