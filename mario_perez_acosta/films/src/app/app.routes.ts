import { Routes } from '@angular/router';
import { FilmListPage } from './components/film-list-page/film-list-page';
import { FilmItemComponent } from './components/film-item-component/film-item-component';

export const routes: Routes = [

    {path: 'film-list', component: FilmListPage},
    {path:'film-item',component:FilmItemComponent},
    {path:'**',redirectTo:'',component:FilmListPage}
];
