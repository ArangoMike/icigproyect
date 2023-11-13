import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFgroupComponent } from './create-fgroup/create-fgroup.component';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditfgroupsComponent } from './familiar-groups/editfgroups/editfgroups.component';
import { FamiliarGroupsComponent } from './familiar-groups/familiar-groups.component';
import { guardGuard } from './guards/guard.guard';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EditmeetingsComponent } from './meetings/editmeetings/editmeetings.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { EditusersComponent } from './users/editusers/editusers.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'main',
    component: MainComponent,
    canActivate: [guardGuard]
  },
  {
    path:'main/users',
    component: UsersComponent,
    canActivate: [guardGuard]
  },
  {
    path:'main/meetings',
    component: MeetingsComponent,
    canActivate: [guardGuard]
  },
  {
    path:'main/meetings/create-meet',
    component: CreateMeetComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/users/create-user',
    component: CreateUserComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/users/edit-user/:id',
    component: EditusersComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/familiargroups',
    component: FamiliarGroupsComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/familiargroups/create',
    component: CreateFgroupComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/familiargroups/edit-fgroup/:id',
    component: EditfgroupsComponent,
    canActivate: [guardGuard]
  },
  {
    path: 'main/meetings/edit-meet/:id',
    component: EditmeetingsComponent,
    canActivate: [guardGuard]
  },
  {path: '**', pathMatch: 'full', redirectTo:'login'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
