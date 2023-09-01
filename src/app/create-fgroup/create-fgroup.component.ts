import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-fgroup',
  templateUrl: './create-fgroup.component.html',
  styleUrls: ['./create-fgroup.component.scss']
})
export class CreateFgroupComponent {
  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  

  constructor(private fb: FormBuilder){
    this.crearFormulario();
    
  }
 

  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      liderID: ['', [Validators.required, Validators.minLength(5)]],
    })
  }
}
