import { Routes } from '@angular/router';
import { VehicleListComponent } from './components/vehicle-list-component/vehicle-list-component';

export const routes: Routes = [

    {path:'', component:VehicleListComponent},
    {path:'**',redirectTo:'',component:VehicleListComponent}
];
