import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    gameData : any;

    constructor(private http: HttpClient) {
        this.http.get('./assets/db/games/elf-hunting/info.json').subscribe(gameData => {
            this.gameData = gameData;
            console.log('gameData');
            console.log(JSON.stringify(gameData));
        });
    }

    ngOnInit() {
    }

}
