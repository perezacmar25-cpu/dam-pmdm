import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControlComponent } from './form-control/form-control';

@Component({
  imports: [RouterOutlet, FormControlComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('form-control');
}
