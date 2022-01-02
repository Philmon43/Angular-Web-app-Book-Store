import { Component, OnInit } from '@angular/core';

import { BookApiService } from 'src/app/services/book-api.service';
import { BookModel } from 'src/app/book-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent implements OnInit {
  books: BookModel[] = [];
  constructor(
    private bookapiservice: BookApiService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.bookapiservice
      .getBooks()
      .subscribe((res) => (this.books = res.slice(2)));
  }

  navigateToBookDetails(book: BookModel) {
    this._router.navigate(['/book-details'], {
      queryParams: { isbn: book.ISBN },
    });
  }
}
