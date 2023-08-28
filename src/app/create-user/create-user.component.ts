import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  

  constructor(private fb: FormBuilder){
    this.crearFormulario();
    
  }
  roles: Roles[] = [
    { value: "deafult", viewValue: 'Seleccione una opción' },
    { value: "ROLE_USER", viewValue: 'Usuario' },
    { value: "ROLE_OPERATION", viewValue: 'Operador' },
    { value: "ROLE_ADMIN", viewValue: 'Administrador' },
  ];

  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      role: [this.roles[0].value, Validators.required]
    })
  }
}

interface Roles {
  value: string;
  viewValue: string;
}