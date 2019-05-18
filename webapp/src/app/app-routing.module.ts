import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { SoftwareComponent } from './software/software.component';
import { SoftwareProjectDetailComponent } from './software-project-detail/software-project-detail.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'games', component: GamesComponent },
    { path: 'games/:id', component: GameComponent },
    { path: 'software', component: SoftwareComponent },
    { path: 'software/:id', component: SoftwareProjectDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
