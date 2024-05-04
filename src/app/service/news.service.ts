import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '7e338c37b7b443be997d6bdf752d33ca'; // Replace 'YOUR_API_KEY' with your actual News API key
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) {}
  // Method to fetch top headlines
  getTopHeadlines(): Observable<any> {
    const url = `${this.apiUrl}/top-headlines`;
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('country', 'us'); // Default country, you can change it as per your requirement
    return this.http.get<any>(url, { params }).pipe(
      catchError((error) => {
        console.error('Error fetching top headlines:', error);
        throw error;
      })
    );
  }
// Method to search articles by keyword
  searchArticlesByKeyword(keyword: string): Observable<any> {
    const url = `${this.apiUrl}/everything`;
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('q', keyword);
    return this.http.get<any>(url, { params }).pipe(
      catchError(error => {
        console.error('Error searching articles by keyword:', error);
        throw error;
      })
    );
  }

}
