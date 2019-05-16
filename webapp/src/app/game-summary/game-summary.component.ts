import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-summary',
  templateUrl: './game-summary.component.html',
  styleUrls: ['./game-summary.component.css']
})
export class GameSummaryComponent implements OnInit {
  @Input() public gameId : string;
  private gameData : any = null;
  private gameHref : string = null;

  constructor(private http : HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('./assets/db/games/' + this.gameId + '.json').subscribe(gameData => {
      this.gameData = gameData;
      this.gameHref = '/games/' + this.gameId;
    });
  }
}
