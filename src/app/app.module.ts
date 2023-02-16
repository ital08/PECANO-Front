import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponentComponent } from './base-component/base-component.component';
import { MaterialComponentModule } from './shared/components/material-component.module';
import { CallbackModule } from './shared/pipes/callback.module';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialComponentModule,
    CallbackModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  exports: [CallbackModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
