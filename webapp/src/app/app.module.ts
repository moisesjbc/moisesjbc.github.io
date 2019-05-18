import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { GameSummaryComponent } from './game-summary/game-summary.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    GameComponent,
    GameSummaryComponent,
    SoftwareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot()
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
