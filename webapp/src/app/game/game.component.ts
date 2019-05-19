import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

    gameData : any;

    constructor(private http: HttpClient, private route: ActivatedRoute) {
        const id = this.route.snapshot.paramMap.get('id');
        this.http.get('./assets/db/games/' + id + '.json').subscribe(gameData => {
            this.gameData = gameData;
        });
    }

    ngOnInit() {
    }

}
