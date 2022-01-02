import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hyperlinks',
  templateUrl: './hyperlinks.component.html',
  styleUrls: ['./hyperlinks.component.css'],
})
export class HyperlinksComponent implements OnInit {
  @Input() 'label': string;

  constructor() {}

  ngOnInit(): void {}
}
