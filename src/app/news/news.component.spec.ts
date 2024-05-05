import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { NewsComponent } from './news.component';
import { NewsService } from '../service/news.service';

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;
  let newsService: NewsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [NewsService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    newsService = TestBed.inject(NewsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch top headlines on initialization', () => {
    const response = {
      articles: [{ title: 'Lagos' }, { title: 'Nigeria' }],
    };
    spyOn(newsService, 'getTopHeadlines').and.returnValue(of(response));

    component.ngOnInit();

    expect(component.topHeadlines.length).toBe(2);
    expect(component.topHeadlines[0].title).toBe('Lagos');
  });

  it('should search articles by keyword', () => {
    const response = {
      articles: [{ title: 'Lagos' }, { title: 'Nigeria' }],
    };
    spyOn(newsService, 'searchArticlesByKeyword').and.returnValue(of(response));

    component.searchTerm = 'lagos';
    component.searchArticles();

    expect(component.searchResults.length).toBe(2);
    expect(component.searchResults[0].title).toBe('Lagos');
  });
});
