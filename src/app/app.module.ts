import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from "angular-datatables";
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { BikeDetailsComponent } from './bike-details/bike-details.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    BikeDetailsComponent,
    NavbarComponent,
    AnalysisComponent,
    FilterComponent,
  ],
  imports: [
    BrowserModule, DataTablesModule, FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
