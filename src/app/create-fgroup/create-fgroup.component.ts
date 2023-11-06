import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-create-fgroup',
  templateUrl: './create-fgroup.component.html',
  styleUrls: ['./create-fgroup.component.scss']
})
export class CreateFgroupComponent {
  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  

  constructor(private fb: FormBuilder,
    private route: Router,
    private authService:GrupoService ,
    private toast: ToastrService
    ){
    this.crearFormulario();
    
  }
 
  get nameNoValido() {
    return this.regForm.get('name')?.invalid && this.regForm.get('name')?.touched
  }
  get descripcionNoValido() {
    return this.regForm.get('description')?.invalid && this.regForm.get('description')?.touched
  }

  get liderIdNoValido() {
    return this.regForm.get('liderId')?.invalid && this.regForm.get('liderId')?.touched
  }

  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      liderId: ['', [Validators.required, Validators.minLength(5), Validators.email]],
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
        liderGrupo: this.regForm.value.liderId,
        contraseñaUsu: this.regForm.value.password,
        nombreGrupo: this.regForm.value.name,
        descripcionGrupo: this.regForm.value.description
      }

      // Aquí hago el consumo del api post
      this.authService.saveUser(body)
        .subscribe(response => {

          this.toast.success('Redirigiendo...', 'Registro exitoso!')
          setTimeout(() => {
            this.route.navigate(['/main/familiargroups'])
          }, 2000);

        })

    }
  }

}
