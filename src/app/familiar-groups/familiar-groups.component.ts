import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-familiar-groups',
  templateUrl: './familiar-groups.component.html',
  styleUrls: ['./familiar-groups.component.scss']
})
export class FamiliarGroupsComponent {

  familiarGoups = [{"id":1,"groupName":"Popular 1","description":"Esta es una descripción de cada grupo familiar...","bossUser":1040752791},
{"id":2,"groupName":"La America","description":"Esta es una descripción de cada grupo familiar...","bossUser":97065421},
{"id":3,"groupName":"Floresta","description":"Esta es una descripción de cada grupo familiar...","bossUser":1152211343},
{"id":4,"groupName":"Villa Nueva","description":"Esta es una descripción de cada grupo familiar...","bossUser":43256987},
{"id":5,"groupName":"Torres bombona","description":"Esta es una descripción de cada grupo familiar...","bossUser":59871410},
{"id":6,"groupName":"Belencito","description":"Esta es una descripción de cada grupo familiar...","bossUser":6},
{"id":7,"groupName":"Santa Monica","description":"Esta es una descripción de cada grupo familiar...","bossUser":7},
{"id":8,"groupName":"Realcube","description":"Esta es una descripción de cada grupo familiar...","bossUser":8},
{"id":9,"groupName":"Zoomcast","description":"Esta es una descripción de cada grupo familiar...","bossUser":9},
{"id":10,"groupName":"prueba1","description":"Esta es una descripción de cada grupo familiar...","bossUser":16547820},
{"id":11,"groupName":"Pixoboo","description":"Esta es una descripción de cada grupo familiar...","bossUser":11},
{"id":12,"groupName":"Wikibox","description":"Esta es una descripción de cada grupo familiar...","bossUser":12},
{"id":13,"groupName":"Flashspan","description":"Esta es una descripción de cada grupo familiar...","bossUser":13},
{"id":14,"groupName":"Tambee","description":"Esta es una descripción de cada grupo familiar...","bossUser":14091568},
{"id":15,"groupName":"Mybuzz","description":"Esta es una descripción de cada grupo familiar...","bossUser":15},
{"id":16,"groupName":"Mynte","description":"Esta es una descripción de cada grupo familiar...","bossUser":16},
{"id":17,"groupName":"Edgeify","description":"Esta es una descripción de cada grupo familiar...","bossUser":17},
{"id":18,"groupName":"Jabbercube","description":"Esta es una descripción de cada grupo familiar...","bossUser":16549871},
{"id":19,"groupName":"Yodo","description":"Esta es una descripción de cada grupo familiar...","bossUser":19},
{"id":20,"groupName":"Eare","description":"Esta es una descripción de cada grupo familiar...","bossUser":20354798}]

  displayedColumns: string[] = ['id', 'groupName', 'description', 'bossUser','edits', 'delete'];
  dataSource = new MatTableDataSource(this.familiarGoups);

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
