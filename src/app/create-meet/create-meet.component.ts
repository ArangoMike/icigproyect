import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReunionService } from '../service/reunion.service';

@Component({
  selector: 'app-create-meet',
  templateUrl: './create-meet.component.html',
  styleUrls: ['./create-meet.component.scss']
})
export class CreateMeetComponent {
  disableSelect = new FormControl(false);
  regForm!: FormGroup;
  

  constructor(private fb: FormBuilder,private route: Router,
    private reunionService: ReunionService, private toast: ToastrService){
    this.crearFormulario();
    
  }
 
  get nameNoValido() {
    return this.regForm.get('name')?.invalid && this.regForm.get('name')?.touched
  }
  get fechaNoValida() {
    return this.regForm.get('fecha')?.invalid && this.regForm.get('fecha')?.touched
  }
   get horaNoValida() {
    return this.regForm.get('hora')?.invalid && this.regForm.get('hora')?.touched
  }
  get descripcionNoValida() {
    return this.regForm.get('descripcion')?.invalid && this.regForm.get('descripcion')?.touched
  }
  
  crearFormulario(): void {
    this.regForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      fecha: ['',Validators.required],
      hora: ['', [Validators.required, Validators.minLength(4)]],
      descripcion: ['', [Validators.required, Validators.minLength(4)]],
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
        nombreReunion: this.regForm.value.name,
        fechaReunion: this.regForm.value.fecha,
        horaReunion: this.regForm.value.hora,
        descripcionReunion: this.regForm.value.descripcion
      }

      // Aquí hago el consumo del api post
      this.reunionService.saveReunion(body)
        .subscribe(response => {

          this.toast.success('Redirigiendo...', 'Registro exitoso!')
          setTimeout(() => {
            this.route.navigate(['/main/meetings'])
          }, 2000);

        })

    }
  }

}