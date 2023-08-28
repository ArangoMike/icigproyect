import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.scss']
})
export class CreateMeetComponent {
  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  

  constructor(private fb: FormBuilder){
    this.crearFormulario();
    
  }
 

  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
    })
  }
}