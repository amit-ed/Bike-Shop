import { Component, OnInit } from '@angular/core';
import { Bike } from '../bikes';
import {BikeService} from "../bike.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  bikes !: Bike[];
  selectedBike !: Bike;

  ngOnInit() {
    this.getBikes();
  }

  constructor(private bikeService : BikeService) {}

  getBikes()
  {
    this.bikeService.getBikes().subscribe(bikes => (this.bikes = bikes));
  }

  selectBike(bike : Bike) {
    this.selectedBike = bike;
  }

  removeSelected()
  {
    //this.bikes = this.bikes.filter(bike => bike !== this.selectedBike);
    this.bikeService.removeBike(this.selectedBike.id);
    this.getBikes();
  }
}
