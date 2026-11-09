import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-control',
  styleUrl: './form-control.css',
  templateUrl: './form-control.html',
})
export class FormControlComponent {

  titleControl = new FormControl('');
  descriptionControl = new FormControl('');
  categoryControl = new FormControl('');
  etiquetasControl = new FormControl('');
  emailControl = new FormControl('');
  publicacionControl = new FormControl('');

  title = '';
  description = '';
  category = '';
  etiquetas = '';
  email = '';
  publicacion = '';

  onSubmit() {
    this.setTitle(this.titleControl.value ?? '');
    this.setDescription(this.descriptionControl.value ?? '');
    this.setCategory(this.categoryControl.value ?? '');
    this.setEtiquetas(this.etiquetasControl.value ?? '');
    this.setEmail(this.emailControl.value ?? '');
    this.setPublicacion(this.publicacionControl.value ?? '');
  }

  setTitle(value: string) { 
    this.title = value; 
  }
  setDescription(value: string) {
     this.description = value;
     }
  setCategory(value: string) {
     this.category = value; 
    }
  setEtiquetas(value: string) {
     this.etiquetas = value; 
    }
  setEmail(value: string) {
     this.email = value; 
    }
  setPublicacion(value: string) {
     this.publicacion = value;
     }
}

