import { Injectable } from '@angular/core';
import { Bike, bikes } from "./bikes";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BikeService {
  bikes : Bike[];
  getBikes() : Observable<Bike[]>
  {
    return of(this.bikes);
  }

  removeBike(id : number)
  {
    this.bikes = this.bikes.filter(object => object.id !== id);
  }

  // updateBike(bike : Bike, newBike : Bike)
  // {
  //   //this.bikes.find()
  //
  // }

  constructor() { this.bikes = bikes; }
}
