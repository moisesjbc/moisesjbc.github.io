import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-literature-list',
  templateUrl: './literature-list.component.html',
  styleUrls: ['./literature-list.component.css']
})
export class LiteratureListComponent implements OnInit {

  public bookIds: string[];
  public shortStoryIds: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/db/literature/index.json').subscribe(literatureInfo => {
        this.bookIds = literatureInfo['books'];
        this.shortStoryIds = literatureInfo['short-stories'];
        this.footer = literatureInfo['footer'];
    });
  }
}
