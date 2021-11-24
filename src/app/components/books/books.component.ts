import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';
import { BookModel } from '../../book-model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books: BookModel[] = [];
  constructor(private bookapiservice: BookApiService) {}

  ngOnInit(): void {
    this.bookapiservice.getAuthors().subscribe((res) => {
      this.books = res;
      console.log(this.books);
    });
  }
}
