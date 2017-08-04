import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports for loading and configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';
import { CollectionModule } from './collection/collection.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
