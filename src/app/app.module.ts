import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Import Angularfire config from environment
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment'; 

import { AppRoutingModule } from './app-routing.module';
import { CollectionModule } from './collection/collection.module';
import { PatternsModule } from './patterns/patterns.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      JsonpModule,
      HttpClientModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      CollectionModule,
      AngularFireModule.initializeApp( environment.firebase ),
      PatternsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
