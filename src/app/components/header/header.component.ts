import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menu = false;

  constructor() {}

  ngOnInit(): void {}

  burgerMenu() {
    return (this.menu = !this.menu);
  }
}
