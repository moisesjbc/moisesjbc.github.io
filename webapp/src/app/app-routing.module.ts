import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesListComponent } from './sections/games-list/games-list.component';
import { GameDetailComponent } from './sections/game-detail/game-detail.component';
import { GamePlayComponent } from './sections/game-play/game-play.component';
import { HomeComponent } from './sections/home/home.component';
import { SoftwareListComponent } from './sections/software-list/software-list.component';
import { SoftwareDetailComponent } from './sections/software-detail/software-detail.component'
import { LiteratureListComponent } from './sections/literature-list/literature-list.component'
import { LiteratureDetailComponent } from './sections/literature-detail/literature-detail.component'
import { NotFoundComponent } from './sections/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', component: GamesListComponent },
    { path: 'games/:id', component: GameDetailComponent },
    { path: 'games/:id/play', component: GamePlayComponent },
    { path: 'software', component: SoftwareListComponent },
    { path: 'software/:id', component: SoftwareDetailComponent },
    { path: 'literature', component: LiteratureListComponent },
    { path: 'literature/:id', component: LiteratureDetailComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
