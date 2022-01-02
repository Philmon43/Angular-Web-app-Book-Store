import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookModel } from '../book-model';

const httpOptions = {
  Headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  private apiUrl = 'http://localhost:5000/data';
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<[]> {
    return this.http.get<any>(this.apiUrl + '/authors');
  }
  getImages(): Observable<[]> {
    return this.http.get<any>(this.apiUrl);
  }
  getBooks(): Observable<BookModel[]> {
    return this.http.get<any>(this.apiUrl);
  }

  updateBook(book: BookModel): Observable<BookModel> {
    const url = `${this.apiUrl}/${book.ISBN}`;
    console.log(book);
    return this.http.put<BookModel>(url, book);
  }
}
