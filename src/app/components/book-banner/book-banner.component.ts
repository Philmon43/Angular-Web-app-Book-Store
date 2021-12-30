import { Component, OnInit } from '@angular/core';
import { BookApiService } from 'src/app/services/book-api.service';

@Component({
  selector: 'app-book-banner',
  templateUrl: './book-banner.component.html',
  styleUrls: ['./book-banner.component.css'],
})
export class BookBannerComponent implements OnInit {
  images = [];
  constructor(private bookapiservice: BookApiService) {}

  ngOnInit(): void {
    this.bookapiservice.getImages('/data').subscribe((res) => {
      this.images = res.map((data) => data['image']).slice(5);
    });
  }
}
