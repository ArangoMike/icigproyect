import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/shared/shared.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { CommonModule, DatePipe } from '@angular/common';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { FamiliarGroupsComponent } from './familiar-groups/familiar-groups.component';
import { CreateFgroupComponent } from './create-fgroup/create-fgroup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EditmeetingsComponent } from './meetings/editmeetings/editmeetings.component';
import { EditusersComponent } from './users/editusers/editusers.component';
import { EditfgroupsComponent } from './familiar-groups/editfgroups/editfgroups.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    NavbarComponent,
    UsersComponent,
    MeetingsComponent,
    CreateUserComponent,
    CreateMeetComponent,
    FamiliarGroupsComponent,
    CreateFgroupComponent,
    EditmeetingsComponent,
    EditusersComponent,
    EditfgroupsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
