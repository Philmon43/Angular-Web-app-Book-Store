import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { BookModel } from 'src/app/book-model';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  faSearch = faSearch;
  searchTerm: string = '';
  books: BookModel[] = [];
  bookOnSearch: BookModel[] = [];
  constructor(private bookapiservice: BookApiService) {}

  ngOnInit(): void {
    this.bookapiservice.getBooks().subscribe((res) => {
      this.books = res;
    });
  }

  textChange() {
    this.bookOnSearch = this.books.filter((book) => {
      return (
        this.searchTerm.toLowerCase() ===
          book.title.toLowerCase().substring(0, this.searchTerm.length) &&
        this.searchTerm.length > 0
      );
    });
  }
}
