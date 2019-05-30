import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './sections/games-list/games-list.component';
import { HomeComponent } from './sections/home/home.component';
import { GameDetailComponent } from './sections/game-detail/game-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SoftwareListComponent } from './sections/software-list/software-list.component';
import { ProjectsListComponent } from './lib/projects-list/projects-list.component';
import { ProjectSummaryComponent } from './lib/project-summary/project-summary.component';
import { SoftwareDetailComponent } from './sections/software-detail/software-detail.component';
import { LiteratureListComponent } from './sections/literature-list/literature-list.component';
import { LiteratureDetailComponent } from './sections/literature-detail/literature-detail.component';
import { LinksListComponent } from './lib/links-list/links-list.component';
import { BreadcumbComponent } from './lib/breadcumb/breadcumb.component';
import { GamePlayComponent } from './sections/game-play/game-play.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesListComponent,
    HomeComponent,
    GameDetailComponent,
    SoftwareListComponent,
    ProjectsListComponent,
    ProjectSummaryComponent,
    SoftwareDetailComponent,
    LiteratureListComponent,
    LiteratureDetailComponent,
    LinksListComponent,
    BreadcumbComponent,
    GamePlayComponent,
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
