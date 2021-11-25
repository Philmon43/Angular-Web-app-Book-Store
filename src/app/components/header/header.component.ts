import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  menu = false;

  constructor() {}

  ngOnInit(): void {}

  burgerMenu() {
    return (this.menu = !this.menu);
  }
}
