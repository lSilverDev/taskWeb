import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { NewTaskComponent } from './views/new-task/new-task.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'newTask',
    component: NewTaskComponent
  },
  // {
  //   path: 'teste',
  //   component: ListCardsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
