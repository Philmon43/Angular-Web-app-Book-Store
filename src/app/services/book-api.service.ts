import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookApiService {
  apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {}

  getAuthors(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/authors');
  }
  getImages(image: String): Observable<any> {
    return this.http.get<any>(this.apiUrl + image);
  }
}
