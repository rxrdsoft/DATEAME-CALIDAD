import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import { Observable } from 'rxjs/Observable';

interface Publicacion {
  descripcion: string;
  uid:string;
  name:string;
  photoURL:string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  publicacionObj:Observable<Publicacion[]>;
  constructor(private services:ServicesService) { }
  
  ngOnInit() {

      
  }

}
