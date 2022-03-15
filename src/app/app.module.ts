import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransaccionesTddComponent } from './core/components/transacciones-tdd/transacciones-tdd.component';

@NgModule({
  declarations: [
    AppComponent,
    TransaccionesTddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
