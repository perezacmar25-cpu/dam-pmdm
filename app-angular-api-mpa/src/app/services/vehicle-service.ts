import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { VehicleDetailResponse } from '../interfaces/vehicle-detail-response';

@Service()
export class VehicleService {


    http = inject (HttpClient);


    getAll() {
        return this.http.get<VehicleDetailResponse>('https://swapi.dev/api/vehicles/?page=2')
    }


}
