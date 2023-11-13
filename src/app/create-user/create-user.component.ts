import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  
  // Constructor del componente, inyecta servicios y herramientas necesarios.
  constructor(private fb: FormBuilder,
    private route: Router,
    private authService: UsuarioService,
    private toast: ToastrService
    ){
    this.crearFormulario();
    
  }
  roles: Roles[] = [
    { value: "", viewValue: 'Seleccione una opción' },
    { value: "ROLE_USER", viewValue: 'Usuario' },
    { value: "ROLE_OPERATION", viewValue: 'Operador' },
    { value: "ROLE_ADMIN", viewValue: 'Administrador' },
  ];

  get passNoValido() {
    return this.regForm.get('password')?.invalid  && this.regForm.get('password')?.touched 
    || this.regForm.get('password')?.value != this.regForm.get('password1')?.value && this.regForm.get('password')?.touched 
  }
  get emailNoValido() {
    return this.regForm.get('email')?.invalid && this.regForm.get('email')?.touched
  }
  get nameNoValido() {
    return this.regForm.get('name')?.invalid && this.regForm.get('name')?.touched
  }
  get celNoValido() {
    return this.regForm.get('phone')?.invalid && this.regForm.get('phone')?.touched
  }
  get roleNoValido() {
    return this.regForm.get('role')?.invalid && this.regForm.get('role')?.touched
  }

  //formulario para crear usuarios
  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
      password1: ['', [Validators.required, Validators.minLength(4)]],
      role: [this.roles[0].value, [Validators.required, Validators.minLength(3)]]
    })
  }


  // metodo para guardar el usuario ingresado en el formulario
  guardar() {

    if (this.regForm.invalid) {

      this.toast.error('Intenta de nuevo', 'Error en los datos!');
      return Object.values(this.regForm.controls).forEach(control => {
        control.markAllAsTouched();
      })

    } else {

      var body = {
        email: this.regForm.value.email,
        contraseñaUsu: this.regForm.value.password,
        nombreUsu: this.regForm.value.name,
        apellidoUsu: this.regForm.value.lastName,
        numeroCelularUsu: this.regForm.value.phone,
        rolIglesiaUsu: this.regForm.value.role
      }

      // Aquí hago el consumo del api post
      this.authService.saveUser(body)
        .subscribe(response => {

          this.toast.success('Redirigiendo...', 'Registro exitoso!')
          setTimeout(() => {
            this.route.navigate(['/main/users'])
          }, 2000);

        })

    }
  }


}

interface Roles {
  value: string;
  viewValue: string;
}