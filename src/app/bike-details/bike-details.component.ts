import {Component, Input} from '@angular/core';
import { Bike } from "../bikes";
import {BikeService} from "../bike.service";

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent {
  @Input() bike !: Bike;

  constructor(private bikeService : BikeService) {}

  saveBike()
  {
    //this.bikeService.updateBike(this.bike, )
  }
}
