
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

@NgModule({
  declarations: [
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    TourOfHeroesRoutingModule,
    //这两个不知道咋回事，放子模块不行，在appmodule注册才行 https://github.com/angular/in-memory-web-api/issues/210
    // HttpClientModule
    // HttpClientInMemoryWebApiModule.forFeature(
    //   InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [
    // MessageService,
    // HeroService
  ]
})
export class TourOfHeroesModule { }
