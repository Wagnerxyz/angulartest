
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { TourOfHeroesRoutingModule } from './tour-of-heroes-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TourOfHeroesComponent } from './tour-of-heroes.component';

@NgModule({
  declarations: [
    TourOfHeroesComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(
      InMemoryDataService, { dataEncapsulation: false })
  ]
})
export class TourOfHeroesModule { }
