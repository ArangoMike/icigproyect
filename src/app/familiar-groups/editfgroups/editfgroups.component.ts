import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Grupo } from 'src/app/models/grupo';
import { UserM } from 'src/app/models/usuario';
import { GrupoService } from 'src/app/service/grupo.service';

@Component({
  selector: 'app-editfgroups',
  templateUrl: './editfgroups.component.html',
  styleUrls: ['./editfgroups.component.scss']
})
export class EditfgroupsComponent implements OnInit{

  grupo: Grupo | undefined;
  regForm!: FormGroup;

  constructor (private route: ActivatedRoute,
    private fb: FormBuilder, private router: Router,
    private usuarioService: GrupoService, private toast: ToastrService){
      this.crearFormulario();
    }
  
    ngOnInit(): void {
      this.getGrupo();
      
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
        name: [this.grupo?.nombreGrupo, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
        description: [this.grupo?.descripcionGrupo, [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        liderId: [this.grupo?.liderGrupo, [Validators.required, Validators.minLength(5), Validators.email, , Validators.maxLength(100)]],
      })
    }

  getGrupo(){
    let id = this.route.snapshot.paramMap.get('id')
    this.usuarioService.getGrupo(id).subscribe(data =>{
      this.grupo = data;
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
        liderGrupo: this.regForm.value.liderId,
        contraseñaUsu: this.regForm.value.password,
        nombreGrupo: this.regForm.value.name,
        descripcionGrupo: this.regForm.value.description
      }
     
      let id = this.route.snapshot.paramMap.get('id')
      
     return this.usuarioService.updateGrupo(id, body).subscribe(response => {

      this.toast.success('Redirigiendo...', 'Edición exitosa!')
      setTimeout(() => {
        this.router.navigate(['/main/familiargroups'])
      }, 2000);

    })
    }
  }
}

