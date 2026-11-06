import { Component, inject, OnInit, signal } from '@angular/core';
import { FilmService } from '../../services/film-service';
import { Film } from '../../interfaces/film-detail-response';

@Component({
  imports: [],
  selector: 'app-film-list-page',
  styleUrl: './film-list-page.css',
  templateUrl: './film-list-page.html',
})
export class FilmListPage implements OnInit{

  filmService = inject(FilmService)
  films = signal<Film[]>([]);

  ngOnInit(): void {
    this.filmService.getAll().subscribe(resp =>{
      this.films.set(resp.results)

    })

    
  }
}
