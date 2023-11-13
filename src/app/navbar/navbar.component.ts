import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  userT:String | undefined;

  constructor ( private cookieSvc: CookieService)
  {}
  ngOnInit(): void {
    //accedemos si hay un usuario ya logeado o no
    this.userT =this.cookieSvc.get('user');
  }


  //metodo para cerrar sesion del usuario en curso
  logout(){
    this.cookieSvc.deleteAll();
      window.location.assign("/login")
    }
}
