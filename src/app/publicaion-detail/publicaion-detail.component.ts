import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {AuthService} from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import * as firebase from 'firebase/app';
interface Publicacion {
  descripcion: string;
  uid:string;
  name:string;
  photoURL:string;
  id:string;
}
@Component({
  selector: 'app-publicaion-detail',
  templateUrl: './publicaion-detail.component.html',
  styleUrls: ['./publicaion-detail.component.css']
})
export class PublicaionDetailComponent implements OnInit {
  //publicacionesCol:AngularFirestoreCollection<Publicacion>
  idPublicacion:String;
  publicacion:Observable<Publicacion[]>;
  activeUser:firebase.User;
  constructor(private afs:AngularFirestore,private service:ServicesService,private route:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
   /* this.route.params.subscribe((params)=>this.idPublicacion=params['id']);
    this.publicacionesCol = this.afs.collection<Publicacion>('publicaciones',ref => ref.where('id', '==',this.idPublicacion));
    this.publicacion = this.publicacionesCol.valueChanges();*/

   this.route.params.subscribe((params)=>this.idPublicacion=params['id']);
   console.log('ESTO ES EL ID POR ROUTE= '+this.idPublicacion);
    this.publicacion=this.service.getPublicaciones(this.idPublicacion);
    console.log(this.publicacion);
    this.activeUser=this.auth.getAuthState();
    console.log(this.activeUser);
   // this.publicacion.subscribe(console.log);
  }

}
