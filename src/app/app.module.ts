import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
    SharereplaytestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ count: counterReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
