import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent {
  @Input() articles: any[] = [];
  displayedArticles: any[] = [];
  currentPage: number = 1;
  articlesPerPage: number = 10;

  constructor() {}

  ngOnChanges(): void {
    this.updateDisplayedArticles();
  }

  updateDisplayedArticles(): void {
    const startIndex = (this.currentPage - 1) * this.articlesPerPage;
    this.displayedArticles = this.articles.slice(
      startIndex,
      startIndex + this.articlesPerPage
    );
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
      this.updateDisplayedArticles();
    }
  }

  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedArticles();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedArticles();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  get totalPages(): number {
    return Math.ceil(this.articles.length / this.articlesPerPage);
  }
}
