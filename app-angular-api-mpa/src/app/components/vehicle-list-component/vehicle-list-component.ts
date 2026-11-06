import { Component, inject, OnInit, signal } from '@angular/core';
import { VehicleService } from '../../services/vehicle-service';
import { Vehicle, VehicleDetailResponse } from '../../interfaces/vehicle-detail-response';
import { VehicleItemComponent } from '../vehicle-item-component/vehicle-item-component';

@Component({
  imports: [VehicleItemComponent],
  selector: 'app-vehicle-list-component',
  styleUrl: './vehicle-list-component.css',
  templateUrl: './vehicle-list-component.html',
})
export class VehicleListComponent implements OnInit{


  vehicleService = inject(VehicleService)
  vehicles = signal<Vehicle[]>([]);

ngOnInit(): void {
  this.vehicleService.getAll().subscribe(resp => {
    this.vehicles.set(resp.results);
  });

  }

}
