import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-literature-list',
  templateUrl: './literature-list.component.html',
  styleUrls: ['./literature-list.component.css']
})
export class LiteratureListComponent implements OnInit {

  private bookIds: string[];
  private shortStoryIds: string[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/db/literature/index.json').subscribe(literatureInfo => {
        this.bookIds = literatureInfo['books'];
        this.shortStoryIds = literatureInfo['short-stories'];
        console.log('------------------------> this.shortStoryIds');
        console.log(this.shortStoryIds);
    });
  }
}
