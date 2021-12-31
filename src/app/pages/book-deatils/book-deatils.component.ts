import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookApiService } from 'src/app/services/book-api.service';
import { BookModel } from 'src/app/book-model';

@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrls: ['./book-deatils.component.css'],
})
export class BookDeatilsComponent implements OnInit {
  id: any;
  books: BookModel[] = [];

  constructor(
    private bookservices: BookApiService,
    private _activattRout: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activattRout.queryParams.subscribe(
      (params) => (this.id = params.isbn)
    );
    this.bookservices.getBooks('/data').subscribe((res) => {
      this.books = res.filter((book) => book.ISBN === Number(this.id) && book);
    });
  }

  onAddItem() {
    return <any>this.books[0].ISBN + 1;
  }
}
