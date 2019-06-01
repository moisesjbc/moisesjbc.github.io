import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'

@Component({
  selector: 'app-game-play',
  templateUrl: './game-play.component.html',
  styleUrls: ['./game-play.component.css']
})
export class GamePlayComponent implements OnInit {
  private gameHref: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    var gameId : string = this.route.snapshot.paramMap.get('id');
    this.gameHref = sanitizer.bypassSecurityTrustResourceUrl('assets/games/' + gameId + '/index.html');
    console.log('gameHref');
    console.log(this.gameHref);
  }

  ngOnInit() {
  }

}
