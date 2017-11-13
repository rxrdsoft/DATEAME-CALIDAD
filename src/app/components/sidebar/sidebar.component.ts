import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Inicio',  icon: 'home', class: '' },
    { path: 'user-profile', title: 'Perfil',  icon:'person', class: '' },
    { path: 'tarifas', title: 'Tarifas',  icon:'attach_money', class: '' },
    { path: 'publicaciones', title: 'Publicaciones',  icon:'comment', class: '' },
    { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
