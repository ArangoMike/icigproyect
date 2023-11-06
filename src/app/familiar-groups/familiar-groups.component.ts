import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Grupo } from '../models/grupo';
import { GrupoService } from '../service/grupo.service';

@Component({
  selector: 'app-familiar-groups',
  templateUrl: './familiar-groups.component.html',
  styleUrls: ['./familiar-groups.component.scss']
})
export class FamiliarGroupsComponent implements OnInit{
  

  familiarGoups: Grupo[] = [];
  displayedColumns: string[] = ['id', 'groupName', 'description','bossUser', 'edits', 'delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.familiarGoups);
    
constructor(private grupoService: GrupoService, public toast: ToastrService, private router: Router
){}

  ngOnInit(): void {
   this.getGrupos();
  }

  getGrupos():void {
    this.grupoService.getGrupos().subscribe(data =>{
      this.familiarGoups = data;
      this.dataSource = new MatTableDataSource(this.familiarGoups);
      this.dataSource.paginator = this.paginator;
    })
  }

  eliminarGrupo(idGrupo : number){
    this.grupoService.deleteGrupo(idGrupo).subscribe({
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
