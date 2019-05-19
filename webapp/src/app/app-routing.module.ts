import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';
import { SoftwareProjectDetailComponent } from './software-project-detail/software-project-detail.component'
import { LiteratureListComponent } from './literature-list/literature-list.component'
import { LiteratureDetailComponent } from './literature-detail/literature-detail.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', component: GamesListComponent },
    { path: 'games/:id', component: GameDetailComponent },
    { path: 'software', component: SoftwareComponent },
    { path: 'software/:id', component: SoftwareProjectDetailComponent },
    { path: 'literature', component: LiteratureListComponent },
    { path: 'literature/:id', component: LiteratureDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
