import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './home/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './tarifas/table-list.component';
import { TypographyComponent } from './publicaciones/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {LoginComponent} from './login/login.component';
import {PublicaionDetailComponent} from './publicaion-detail/publicaion-detail.component';


const routes: Routes =[
    { path: 'home',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tarifas',     component: TableListComponent },
    {path:'detalles:id',component:PublicaionDetailComponent},
    { path: 'publicaciones',     component: TypographyComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'login',  component: LoginComponent },
    { path: '',          redirectTo: 'home', pathMatch: 'full' },
    

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
