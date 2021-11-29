import { Component, OnInit } from '@angular/core';

import { BookApiService } from 'src/app/services/book-api.service';
import { BookModel } from 'src/app/book-model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private bookapiservice: BookApiService) {}

  ngOnInit(): void {
    this.bookapiservice
      .getBooks('/books')
      .subscribe((res) => (this.books = res.slice(2)));
  }
}
