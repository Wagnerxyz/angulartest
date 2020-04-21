import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [

      { path: 'heroes', component: HeroesComponent },
      { path: 'dashboard', component: DashboardComponent },
      // { path: '', redirectTo: '/heroes/dashboard', pathMatch: 'full' },
      { path: 'detail/:id', component: HeroDetailComponent }

    ]
  },

  // { path: 'heroes', component: HeroesComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: '/heroes/dashboard', pathMatch: 'full' },
  // { path: 'detail/:id', component: HeroDetailComponent }

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TourOfHeroesRoutingModule { }
