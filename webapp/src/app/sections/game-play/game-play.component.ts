import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'
import { ProjectLoader } from '../../services/project-loader/project-loader.service';

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  private gameHref: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private projectLoader: ProjectLoader) {
    var gameId : string = this.route.snapshot.paramMap.get('id');
    this.gameHref = sanitizer.bypassSecurityTrustResourceUrl('assets/games/' + gameId + '/index.html');

    // Just trigger loading of project data for updating breadcumb.
    this.projectLoader.loadProjectData('./assets/db/games/' + gameId + '.json');
  }

  ngOnInit() {
  }

}
