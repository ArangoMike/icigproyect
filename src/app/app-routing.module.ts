import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMeetComponent } from './create-meet/create-meet.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { FamiliarGroupsComponent } from './familiar-groups/familiar-groups.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { MeetingsComponent } from './meetings/meetings.component';
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
    path: 'main/familiargroups',
    component: FamiliarGroupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
