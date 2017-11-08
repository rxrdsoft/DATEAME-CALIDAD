import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-publicaion-detail',
  templateUrl: './publicaion-detail.component.html',
  styleUrls: ['./publicaion-detail.component.css']
})
export class PublicaionDetailComponent implements OnInit {
  idPublicacion:String;
  constructor(private service:ServicesService,private route:ActivatedRoute) { }

  ngOnInit() {
    /*this.publicacionesCol = this.afs.collection<Publicacion>('/publicaciones');
    this.publicaciones = this.publicacionesCol.valueChanges();
    this.publicaciones.subscribe((resp)=>console.log(resp));*/
   this.route.params.subscribe((params)=>console.log(params['id']));
    this.service.getPublicaciones('dqlNyTgqZO2ZnKxuQQEC').subscribe(console.log);
  
    
  }

}
