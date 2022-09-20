import {Component, Input} from '@angular/core';
import { Bike } from "../bikes";

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent {
  @Input() bike !: Bike;
}
