import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'docs-header',
  templateUrl: './docs-header.component.html',
  styleUrls: ['./docs-header.component.css']
})

export class DocsHeaderComponent implements OnInit {
    @Input() currentPage: string;

  constructor() { }

  ngOnInit() {
  }

}
