import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../book-model';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<[]> {
    return this.http.get<any>(this.apiUrl + '/authors');
  }
  getImages(image: String): Observable<[]> {
    return this.http.get<any>(this.apiUrl + image);
  }
  getBooks(books: string): Observable<BookModel[]> {
    return this.http.get<any>(this.apiUrl + books);
  }
}
