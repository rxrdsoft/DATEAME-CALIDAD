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
interface Respuesta {
  
  uid:string;
  name:string;
  photoURL:string;
  mensaje: string;
  idPublicacion:string;
  id:string
}
@Component({
  selector: 'app-publicaion-detail',
  templateUrl: './publicaion-detail.component.html',
  styleUrls: ['./publicaion-detail.component.css']
})
export class PublicaionDetailComponent implements OnInit {
  //publicacionesCol:AngularFirestoreCollection<Publicacion>
  respuestasCol: AngularFirestoreCollection<Respuesta>;
  respuestas: Observable<Respuesta[]>;
  idPublicacion:string;
  publicacion:Observable<Publicacion[]>;
  activeUser:firebase.User;
  mensaje:string;
  constructor(private afs:AngularFirestore,private service:ServicesService,private route:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
   this.route.params.subscribe((params)=>this.idPublicacion=params['id']);
   console.log('ESTO ES EL ID POR ROUTE= '+this.idPublicacion);
    this.publicacion=this.service.getPublicaciones(this.idPublicacion);
    console.log(this.publicacion);
    this.activeUser=this.auth.getAuthState();
    console.log(this.activeUser);
   // this.publicacion.subscribe(console.log);
   this.respuestasCol = this.afs.collection('publicacion_respuestas',ref => ref.where('idPublicacion', '==', this.idPublicacion));
   this.respuestas = this.respuestasCol.valueChanges();
  }

  addRespuesta(){
    //console.log(this.mensaje)
    this.respuestasCol.add({'uid':this.activeUser.uid,
                            'name':this.activeUser.displayName,
                            'photoURL':this.activeUser.photoURL,
                            'mensaje': this.mensaje,
                            'idPublicacion':this.idPublicacion,
                            'id':this.afs.createId()                           
                            });
  }

}
