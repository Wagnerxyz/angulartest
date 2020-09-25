import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { DialogService } from './services/dialog.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './tour-of-heroes/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RefValueObjParentComponent } from './changedetection/RefValueObj/RefValueObj-parent.component';
import { RefValueObjChildComponent } from './changedetection/RefValueObj/RefValueObj-child.component';
import { UserOneComponent } from './changedetection/child-one.component';
import { UserTwoComponent } from './changedetection/child-two.component';
import { OnChangeComponent } from './changedetection/onChange';

import { OnpushHierachyComponent } from './changedetection/onpush-hierachy.component';
import { OnpushHierachyChildComponent } from './changedetection/onpush-hierachy.component';

import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
import { moduleTwoMenu, SETTINGS_MENU } from './syntax';
import { SyntaxModule } from './syntax/syntax.module';
import { FetchDataComponent } from './fetch-data/fetch-data.component'
import { ChangeDetectionParentComponent } from './changedetection/changedetection-parent.component';

function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

@NgModule({
  declarations: [
    UserOneComponent,
    UserTwoComponent,
    AppComponent,
    ChangeDetectionParentComponent,
    NgrxComponent,
    OnChangeComponent,
    RefValueObjParentComponent,
    RefValueObjChildComponent,
    OnpushHierachyComponent,
    OnpushHierachyChildComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CanvaspdfModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }),
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule,
    SyntaxModule,
    AppRoutingModule,

  ],
  providers: [
    { provide: SETTINGS_MENU, useValue: moduleTwoMenu, multi: true },
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
