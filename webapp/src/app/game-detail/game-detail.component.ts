import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

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
