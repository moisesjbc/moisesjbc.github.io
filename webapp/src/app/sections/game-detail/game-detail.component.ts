import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectLoader } from '../../services/project-loader/project-loader.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

    gameData : any;

    constructor(private route: ActivatedRoute, private projectLoader: ProjectLoader) {
        const id = this.route.snapshot.paramMap.get('id');
        this.projectLoader.loadProjectData('./assets/db/games/' + id + '.json').then(gameData => {
            this.gameData = gameData;
        });
    }

    ngOnInit() {
    }

}
