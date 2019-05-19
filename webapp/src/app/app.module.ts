import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesListComponent } from './games-list/games-list.component';
import { HomeComponent } from './home/home.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';
import { SoftwareListComponent } from './software-list/software-list.component';
import { ProjectsListComponent } from './projects-list/projects-list.component';
import { ProjectSummaryComponent } from './project-summary/project-summary.component';
import { SoftwareDetailComponent } from './software-detail/software-detail.component';
import { LiteratureListComponent } from './literature-list/literature-list.component';
import { LiteratureDetailComponent } from './literature-detail/literature-detail.component';
import { LinksListComponent } from './links-list/links-list.component';

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
