import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public rows : any[];
  public gameIds : any[] = null;

  constructor(private http: HttpClient) {
    this.http.get('./assets/db/games/games.json').subscribe(gameIds => {
        this.gameIds = gameIds['games'];
    });
  }

  ngOnInit() {
  }

}
