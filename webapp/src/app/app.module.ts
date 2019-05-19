import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SoftwareComponent } from './software/software.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { SoftwareProjectDetailComponent } from './software-project-detail/software-project-detail.component';
import { LiteratureListComponent } from './literature-list/literature-list.component';
import { LiteratureDetailComponent } from './literature-detail/literature-detail.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    HomeComponent,
    GameComponent,
    SoftwareComponent,
    ProjectsListComponent,
    ProjectSummaryComponent,
    SoftwareProjectDetailComponent,
    LiteratureListComponent,
    LiteratureDetailComponent,
    LinksListComponent
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
