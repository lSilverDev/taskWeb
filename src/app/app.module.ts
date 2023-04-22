import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { LoginComponent } from './views/login/login.component';
import { ListCardsComponent } from './components/list-cards/list-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TaskCardComponent,
    SideBarComponent,
    LoginComponent,
    ListCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
