import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoundButtonComponent } from 'src/app/components/buttons/round-button/round-button.component';

@Component({
  selector: 'app-book-deatils',
  templateUrl: './book-deatils.component.html',
  styleUrls: ['./book-deatils.component.css'],
})
export class BookDeatilsComponent implements OnInit {
  book: any;
  bookFromLocal: any;

  constructor(private _router: Router) {
    this.book = this._router.getCurrentNavigation()?.extras.state;
    this.book && localStorage.setItem('data', JSON.stringify(this.book));
  }

  ngOnInit(): void {
    const data = localStorage.getItem('data');
    this.bookFromLocal =
      (data !== null && JSON.parse(data)) || this._router.navigate(['']);
  }
}
