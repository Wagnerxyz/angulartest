import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChangedetectionComponent } from './changedetection/changedetection.component';
import { UserOneComponent } from './changedetection/user-one.component';
import { UserTwoComponent } from './changedetection/user-two.component';
import { OnChangeComponent } from './changedetection/onChange';
import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
import { HelloParentComponent } from './hello/helloparent.component';
import { HelloComponent } from './hello/hello.component';
import { SharereplaytestComponent } from './sharereplaytest/sharereplaytest.component';
import { FormvalidateComponent } from './formvalidate/formvalidate.component';
import { NgdocheckComponent } from './ngdocheck/ngdocheck.component';
import { AComponent } from './ngdocheck/ngdocheck.component';

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
    // CanvaspdfModule,
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
