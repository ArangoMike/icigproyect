import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reunion } from '../models/reunion';
import { ReunionService } from '../service/reunion.service';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit{

  reuniones: Reunion[] = [];
  displayedColumns: string[] = ['id', 'name', 'fecha','hora', 'edits','delete'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource = new MatTableDataSource(this.reuniones);
    

constructor(private reunionService: ReunionService, public toast: ToastrService, private router: Router
  ){}

ngOnInit():void {
  this.getReuniones();
}


  getReuniones():void {
    this.reunionService.getReuniones().subscribe(data =>{
      this.reuniones = data;
      this.dataSource = new MatTableDataSource(this.reuniones);
      this.dataSource.paginator = this.paginator;
    })
  }

 
  eliminarReunion(idReunion : number){
    this.reunionService.deleteReunion(idReunion).subscribe({
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



