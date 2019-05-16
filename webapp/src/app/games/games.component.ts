import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  public rows : any[];
  public gameIds : any[];

  constructor(private http: HttpClient) {
    this.http.get('./assets/db/games/games.json').subscribe(gameIds => {
        var i = 0;
        console.log(this);
        this.rows = [];
        this.gameIds = gameIds['games'];
        while (i < this.gameIds.length) {
            //i++;
            var j = 0;
            var row: string[] = []; 
            console.log(j);
            while (i < this.gameIds.length && j < 3) {
                row.push(this.gameIds[i]);
                i++;
                j++;
            }
            console.log(this);
            this.rows.push(row);
        }
        console.log('this.gameIds');
        console.log(this.gameIds);
    });
  }

  ngOnInit() {
  }

}
