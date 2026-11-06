import { Component, inject, input, output } from '@angular/core';
import { Vehicle } from '../../interfaces/vehicle-detail-response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VehicleModal } from '../../modals/vehicle-modal/vehicle-modal';

@Component({
  imports: [],
  selector: 'app-vehicle-item-component',
  styleUrl: './vehicle-item-component.css',
  templateUrl: './vehicle-item-component.html',
})
export class VehicleItemComponent {

vehicle = input<Vehicle>();
vehicleClicked = output<Vehicle>();
vehicleModal = inject(NgbModal);



  getVehicleId(){
    return this.vehicle()?.url.split("/")[5]!;
  }


  vehicleEmit() {
  const id = this.vehicle();
  if (id){
    this.vehicleClicked.emit(id);
  }
    
}

openModal() {
  const ref = this.vehicleModal.open(VehicleModal);
  ref.componentInstance.vehicle = this.vehicle;
}





}
