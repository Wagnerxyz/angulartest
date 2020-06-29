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

import { ChangeDetectionParentComponent } from './changedetection/changedetection-parent.component';
import { UserOneComponent } from './changedetection/child-one.component';
import { UserTwoComponent } from './changedetection/child-two.component';
import { OnChangeComponent } from './changedetection/onChange';

import { HelloParentComponent } from './hello/helloparent.component';
import { HelloComponent } from './hello/hello.component';
import { OnpushHierachyComponent } from './changedetection/onpush-hierachy.component';
import { OnpushHierachyChildComponent } from './changedetection/onpush-hierachy.component';

import { NgrxComponent } from './ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
// import { reducers, metaReducers } from './reducers';
import { counterReducer } from './reducers/counter.reducer';
import { TwoWayBindingComponent, SizerComponent, TemplateFormValidateComponent, ReactiveFormComponent, ShareReplayTestComponent, HomeComponent, NewsletterComponent, moduleTwoMenu, SETTINGS_MENU } from './syntax';
import { DiTestComponent } from './syntax/di-test/di-test.component';
import { SyntaxModule } from './syntax/syntax.module';
import { FetchDataComponent } from './fetch-data/fetch-data.component'

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
    HelloParentComponent,
    HelloComponent,
    ShareReplayTestComponent,
    TemplateFormValidateComponent,
    OnpushHierachyComponent,
    OnpushHierachyChildComponent,
    TwoWayBindingComponent,
    SizerComponent,
    ReactiveFormComponent,
    HomeComponent,
    NewsletterComponent,
    DiTestComponent,
    FetchDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CanvaspdfModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }),
    StoreModule.forRoot({ count: counterReducer }),
    BrowserAnimationsModule,
    SyntaxModule
  ],
  providers: [
    { provide: SETTINGS_MENU, useValue: moduleTwoMenu, multi: true },
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
