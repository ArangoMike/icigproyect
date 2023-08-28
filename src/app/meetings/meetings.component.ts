import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent {

  meets = 
  [{"id":1,"name":"Dominical","date":"03/12/2022","hour":"11:14 PM","description":"Attem abor w metabol dis"},
{"id":2,"name":"Celula America","date":"19/07/2023","hour":"2:42 PM","description":"Benign neoplasm ovary"},
{"id":3,"name":"Celula Popular","date":"09/12/2022","hour":"12:33 PM","description":"Pressure ulcer, site NOS"},
{"id":4,"name":"Dominical","date":"06/06/2023","hour":"10:48 PM","description":"Poisoning-parathyroids"},
{"id":5,"name":"Dominical","date":"29/01/2023","hour":"7:22 PM","description":"Histoplasm caps pericard"},
{"id":6,"name":"Celula floresta","date":"12/12/2022","hour":"10:18 PM","description":"Tick-borne fever"},
{"id":7,"name":"Jovenes","date":"18/10/2022","hour":"3:53 PM","description":"Acute gastritis w hmrhg"},
{"id":8,"name":"Dwayne","date":"11/07/2023","hour":"4:01 PM","description":"Poisoning-saluretics"},
{"id":9,"name":"Dominical","date":"23/10/2022","hour":"5:58 PM","description":"Late eff inj-undet circ"},
{"id":10,"name":"Jovenes","date":"10/10/2022","hour":"2:56 PM","description":"Ascending colon inj-open"},
{"id":11,"name":"Corinna","date":"24/02/2023","hour":"11:18 PM","description":"Telogen effluvium"},
{"id":12,"name":"Barbe","date":"12/07/2023","hour":"11:46 PM","description":"Acq hip deformity NEC"},
{"id":13,"name":"Ephrayim","date":"16/07/2023","hour":"7:59 PM","description":"Amebic brain abscess"},
{"id":14,"name":"Borden","date":"01/11/2022","hour":"11:18 PM","description":"Preop exam unspcf"},
{"id":15,"name":"Gavrielle","date":"13/10/2022","hour":"5:18 PM","description":"Screen-neuro condition"},
{"id":16,"name":"Crystal","date":"31/03/2023","hour":"3:24 PM","description":"Alrgc brncpul asprglosis"},
{"id":17,"name":"Gaspar","date":"15/05/2023","hour":"3:50 PM","description":"Excess fet grth-antepart"},
{"id":18,"name":"Brandi","date":"16/03/2023","hour":"8:58 PM","description":"TB pleurisy-histolog dx"},
{"id":19,"name":"Joye","date":"07/02/2023","hour":"1:06 PM","description":"Screen for galactosemia"},
{"id":20,"name":"Diane","date":"07/07/2023","hour":"1:15 PM","description":"Purine/pyrimid dis NEC"},
{"id":21,"name":"Codi","date":"04/12/2022","hour":"10:40 PM","description":"Ob pyem embol-del w p/p"},
{"id":22,"name":"Justin","date":"01/04/2023","hour":"2:22 PM","description":"Prolapsed arm-antepart"},
{"id":23,"name":"Issi","date":"12/07/2023","hour":"1:23 PM","description":"Mal neo rectum/anus NEC"},
{"id":24,"name":"Christen","date":"08/09/2022","hour":"11:15 PM","description":"Toxic eff pesticides NEC"},
{"id":25,"name":"Gib","date":"27/07/2023","hour":"8:52 PM","description":"Heart compl in del-deliv"}]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'rol','edits', 'delete'];
  dataSource = new MatTableDataSource(this.meets);

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
