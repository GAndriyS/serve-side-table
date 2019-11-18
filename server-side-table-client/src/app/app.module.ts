import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from '@ag-grid-community/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [AppComponent, DataTableComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
