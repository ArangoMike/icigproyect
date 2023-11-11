import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reunion } from 'src/app/models/reunion';
import { ReunionService } from 'src/app/service/reunion.service';

@Component({
  selector: 'app-editmeetings',
  templateUrl: './editmeetings.component.html',
  styleUrls: ['./editmeetings.component.scss']
})
export class EditmeetingsComponent implements OnInit {

  reunion: Reunion | undefined;
  regForm!: FormGroup;

constructor (private route: ActivatedRoute,
  private fb: FormBuilder, private router: Router,
  private reunionService: ReunionService, private toast: ToastrService,
  private datePipe: DatePipe){}

  ngOnInit(): void {
    this.getMeeting();
    
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
      nombreReunion: [this.reunion?.nombreReunion, [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      fechaReunion: [this.datePipe.transform(this.reunion?.fechaReunion, 'yyyy-MM-dd') || '', Validators.required],
      horaReunion: [this.reunion?.horaReunion, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      descripcionReunion: [this.reunion?.descripcionReunion, [Validators.required, Validators.minLength(4), Validators.maxLength(150)]],
    })
  }


  getMeeting(){
    let id = this.route.snapshot.paramMap.get('id')
    this.reunionService.getReunion(id).subscribe(data =>{
      this.reunion = data;
      console.log(this.reunion)
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
      // Aquí hago el consumo del api post
      const reunionEdit = this.regForm.value;
      let id = this.route.snapshot.paramMap.get('id')
      
     return this.reunionService.updateReunion(id, reunionEdit).subscribe(response => {

      this.toast.success('Redirigiendo...', 'Edición exitosa!')
      setTimeout(() => {
        this.router.navigate(['/main/meetings'])
      }, 2000);

    })
    }
  }

}
