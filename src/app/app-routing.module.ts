import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFgroupComponent } from './create-fgroup/create-fgroup.component';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditfgroupsComponent } from './familiar-groups/editfgroups/editfgroups.component';
import { FamiliarGroupsComponent } from './familiar-groups/familiar-groups.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EditmeetingsComponent } from './meetings/editmeetings/editmeetings.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { EditusersComponent } from './users/editusers/editusers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'main',
    component: MainComponent
  },
  {
    path:'main/users',
    component: UsersComponent
  },
  {
    path:'main/meetings',
    component: MeetingsComponent
  },
  {
    path:'main/meetings/create-meet',
    component: CreateMeetComponent
  },
  {
    path: 'main/users/create-user',
    component: CreateUserComponent
  },
  {
    path: 'main/users/edit-user/:id',
    component: EditusersComponent
  },
  {
    path: 'main/familiargroups',
    component: FamiliarGroupsComponent
  },
  {
    path: 'main/familiargroups/create',
    component: CreateFgroupComponent
  },
  {
    path: 'main/familiargroups/edit-fgroup/:id',
    component: EditfgroupsComponent
  },
  {
    path: 'main/meetings/edit-meet/:id',
    component: EditmeetingsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
