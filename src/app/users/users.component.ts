import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserM } from '../models/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  

  users: UserM[] = [];
  displayedColumns: string[] = ['name', 'weight', 'symbol', 'cel', 'rol','edits','delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;  
  dataSource = new MatTableDataSource(this.users);

  constructor(private usuarioService: UsuarioService, private router: Router,
    public toast: ToastrService,
    ){}

  ngOnInit(): void {
    this.getUsers();
  }


  getUsers():void {
    this.usuarioService.getUsers().subscribe(data =>{
      this.users = data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    })
  }

  eliminarUsuario(idUser : number){
    this.usuarioService.deleteUser(idUser).subscribe({
      next: (response) => {
        console.log('response :>> ', response);
      },
      error: (error) => {
        console.log('error :>> ', error);
        return this.toast.error('Error inesperado', 'Vuelve a intentarlo, por favor.');

      },
      complete: () => {
        this.toast.warning('Eliminando...', 'Borrado exitoso!');
        setTimeout(() => {
          window.location.reload();
         }, 1500);

      }
    });
  }





}
