import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-form-control',
  styleUrl: './form-control.css',
  templateUrl: './form-control.html',
})
export class FormControlComponent {

  profileForm = new FormGroup({

  titleControl : new FormControl(''),
  descriptionControl : new FormControl(''),
  categoryControl : new FormControl(''),
  etiquetasControl : new FormControl(''),
  emailControl : new FormControl(''),
  publicacionControl : new FormControl('')
  })


  onSubmit() {
    console.warn(this.profileForm.value)
  }


}

