import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserM } from 'src/app/models/usuario';
import { ReunionService } from 'src/app/service/reunion.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-editusers',
  templateUrl: './editusers.component.html',
  styleUrls: ['./editusers.component.scss']
})
export class EditusersComponent implements OnInit{

  usuario: UserM | undefined;
  regForm!: FormGroup;

  constructor (private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router,
    private usuarioService: UsuarioService, private toast: ToastrService,
    private datePipe: DatePipe){
      this.crearFormulario();
    }
  
    ngOnInit(): void {
      this.getUser();
      
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
  
    crearFormulario(): void {
      this.regForm = this.fb.group({
        name: [this.usuario?.nombreUsu, [Validators.required, Validators.minLength(4)]],
        lastName: [this.usuario?.apellidoUsu, [Validators.required, Validators.minLength(3)]],
        phone: [this.usuario?.numeroCelularUsu, [Validators.required, Validators.minLength(6)]],
        email: [this.usuario?.email, [Validators.required, Validators.email]],
        password: [this.usuario?.contraseñaUsu, [Validators.required, Validators.minLength(4)]],
        password1: [this.usuario?.contraseñaUsu, [Validators.required, Validators.minLength(4)]],
        role: [this.usuario?.rolIglesiaUsu, [Validators.required, Validators.minLength(3)]]
      })
    }


  getUser(){
    let id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.getUser(id).subscribe(data =>{
      this.usuario = data;
      this.crearFormulario()
    })
  }

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
     
      let id = this.route.snapshot.paramMap.get('id')
      
     return this.usuarioService.updateUser(id, body).subscribe(response => {

      this.toast.success('Redirigiendo...', 'Edición exitosa!')
      setTimeout(() => {
        this.router.navigate(['/main/users'])
      }, 2000);

    })
    }
  }
}

interface Roles {
  value: string;
  viewValue: string;
}