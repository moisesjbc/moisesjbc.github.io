import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.css']
})
export class LinksListComponent implements OnInit {
  @Input() public links: any;

  constructor() { }

  ngOnInit() {
  }

}
