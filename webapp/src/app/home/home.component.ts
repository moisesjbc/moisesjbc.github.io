import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private homeData: any;

  constructor(private http : HttpClient) { }

  ngOnInit() {
    this.http.get('./assets/db/home/home.json').subscribe(homeData => {
      this.homeData = homeData;
    });
  }

}
