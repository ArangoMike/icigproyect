import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder,
    private route: Router,
    private cookieSvc: CookieService,
    private authService: UsuarioService,
    private toast: ToastrService){this.crearFormulario()}


    get passNoValido() {
      return this.form.get('password')?.invalid  && this.form.get('password')?.touched 
    }
    get emailNoValido() {
      return this.form.get('email')?.invalid && this.form.get('email')?.touched
    }
  
    crearFormulario(): void {
      this.form = this.fb.group({
        password: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
      });
    }

    ingresar() {

      if (this.form.invalid) {
  
        this.toast.error('Intenta de nuevo', 'Error en los datos!');
        return Object.values(this.form.controls).forEach( control => {
          control.markAllAsTouched();
        })
      }else{
  
      const body = {
        "email": this.form.value.email,
        "contraseñaUsu": this.form.value.password
      }
  
      this.authService
        .loginUser(body)
        .subscribe((res) => {       
          if (!res) {
            console.log(res);  
            this.toast.error("Correo o contraseña incorrectos.","Rectifique los datos")
    
          } else {
  
           console.log(res);
           
            this.cookieSvc.set('user',res.toString())
            this.toast.success('Redirigiendo...', 'Ingreso Exitoso!')
            
            setTimeout(() => {
              window.location.assign('/main');
  
            }, 2000);
            
          }
  
        });
    }
    }
  }
