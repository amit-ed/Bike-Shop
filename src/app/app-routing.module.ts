import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {DataComponent} from "./data/data.component";
import { BikeDetailsComponent} from "./bike-details/bike-details.component";
import {AnalysisComponent} from "./analysis/analysis.component";

const routes: Routes = [
  { path: '', component: DataComponent},
  { path: 'analisys', component: AnalysisComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
