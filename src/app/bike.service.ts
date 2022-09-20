import { Injectable } from '@angular/core';
import { Bike, bikes } from "./bikes";
import {Observable, observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  getBikes() : Observable<Bike[]>
  {
    return of(bikes);
  }
  constructor() { }
}
