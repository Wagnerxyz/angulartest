import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { DialogService } from './services/dialog.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './tour-of-heroes/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { UserOneComponent } from './changedetection/user-one.component';
import { UserTwoComponent } from './changedetection/user-two.component';
import { OnChangeComponent } from './changedetection/onChange';

import { HelloParentComponent } from './hello/helloparent.component';
import { HelloComponent } from './hello/hello.component';
import { SharereplaytestComponent } from './sharereplaytest/sharereplaytest.component';
import { FormvalidateComponent } from './formvalidate/formvalidate.component';
import { NgdocheckComponent } from './ngdocheck/ngdocheck.component';
import { AComponent } from './ngdocheck/ngdocheck.component';

import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
@NgModule({
  declarations: [
    UserOneComponent,
    UserTwoComponent,
    AppComponent,
    ChangedetectionComponent,
    NgrxComponent,
    OnChangeComponent,
    HelloParentComponent,
    HelloComponent,
    SharereplaytestComponent,
    FormvalidateComponent,
    NgdocheckComponent,
    AComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CanvaspdfModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }),
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule
  ],
  providers: [
    DialogService,
    CanDeactivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
