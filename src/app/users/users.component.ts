import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {

  users =
  [{"id":1,"name":"Craig","lastName":"Ashfield","email":"cashfield0@acquirethisname.com","role":"cashfield0"},
  {"id":2,"name":"Penny","lastName":"Geratt","email":"pgeratt1@chronoengine.com","role":"pgeratt1"},
  {"id":3,"name":"Winnifred","lastName":"Naptin","email":"wnaptin2@instagram.com","role":"wnaptin2"},
  {"id":4,"name":"Esdras","lastName":"Bollum","email":"ebollum3@ocn.ne.jp","role":"ebollum3"},
  {"id":5,"name":"Dacie","lastName":"Pinchback","email":"dpinchback4@fotki.com","role":"dpinchback4"},
  {"id":6,"name":"Jermaine","lastName":"Ferier","email":"jferier5@issuu.com","role":"jferier5"},
  {"id":7,"name":"Towny","lastName":"Izen","email":"tizen6@techcrunch.com","role":"tizen6"},
  {"id":8,"name":"Halley","lastName":"Le Frank","email":"hlefrank7@oracle.com","role":"hlefrank7"},
  {"id":9,"name":"Ceil","lastName":"Branton","email":"cbranton8@prnewswire.com","role":"cbranton8"},
  {"id":10,"name":"Alister","lastName":"Foxton","email":"afoxton9@intel.com","role":"afoxton9"},
  {"id":11,"name":"Brocky","lastName":"St Clair","email":"bstclaira@mozilla.org","role":"bstclaira"},
  {"id":12,"name":"Reinaldo","lastName":"Checci","email":"rcheccib@nhs.uk","role":"rcheccib"},
  {"id":13,"name":"Othilie","lastName":"Troctor","email":"otroctorc@google.com","role":"otroctorc"},
  {"id":14,"name":"Haskell","lastName":"Fussey","email":"hfusseyd@vistaprint.com","role":"hfusseyd"},
  {"id":15,"name":"Fidel","lastName":"Jurges","email":"fjurgese@ed.gov","role":"fjurgese"},
  {"id":16,"name":"Isidro","lastName":"Capini","email":"icapinif@123-reg.co.uk","role":"icapinif"},
  {"id":17,"name":"Maddie","lastName":"Gilpillan","email":"mgilpillang@theatlantic.com","role":"mgilpillang"},
  {"id":18,"name":"Renaud","lastName":"Copnar","email":"rcopnarh@goodreads.com","role":"rcopnarh"},
  {"id":19,"name":"Ailee","lastName":"Khilkov","email":"akhilkovi@networkadvertising.org","role":"akhilkovi"},
  {"id":20,"name":"Brian","lastName":"Di Ruggiero","email":"bdiruggieroj@shutterfly.com","role":"bdiruggieroj"},
  {"id":21,"name":"Sheffield","lastName":"Penley","email":"spenleyk@nps.gov","role":"spenleyk"},
  {"id":22,"name":"Armando","lastName":"Caine","email":"acainel@youtube.com","role":"acainel"},
  {"id":23,"name":"Simonne","lastName":"Langeren","email":"slangerenm@answers.com","role":"slangerenm"},
  {"id":24,"name":"Crin","lastName":"Kluge","email":"cklugen@google.com","role":"cklugen"},
  {"id":25,"name":"Barry","lastName":"Dubble","email":"bdubbleo@ovh.net","role":"bdubbleo"}]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'rol','edits','delete'];
  dataSource = new MatTableDataSource(this.users);

  @ViewChild(MatPaginator) paginator!: MatPaginator;



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
