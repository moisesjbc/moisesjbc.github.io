import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  public gameIds : any[] = null;

  constructor(private http: HttpClient) {
    this.http.get('./assets/db/games/games.json').subscribe(gameIds => {
        this.gameIds = gameIds['games'];
    });
  }

  ngOnInit() {
  }

}
