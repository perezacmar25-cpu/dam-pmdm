import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Film, FilmDetailResponse } from '../interfaces/film-detail-response';
import { Observable } from 'rxjs';

@Service()
export class FilmService {

    http = inject (HttpClient)
    




    getAll() {

        this.http.get<FilmDetailResponse>(`https://swapi.dev/api/films`)
    }

    getOneFilm(id:string): Observable<Film>{
        return this.http.get<Film>(`https://swapi.dev/api/${id}`)

    }
}
