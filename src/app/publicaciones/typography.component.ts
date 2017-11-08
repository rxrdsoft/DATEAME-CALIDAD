import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {AuthService} from '../auth.service'
import * as firebase from 'firebase/app';

interface Publicacion {
  descripcion: string;
  uid:string;
  name:string;
  photoURL:string;
  id:string;
}

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  publicacionesCol: AngularFirestoreCollection<Publicacion>;
  publicaciones: Observable<Publicacion[]>;
  
  userDetails: firebase.User;
  descripcion:string;


  constructor(private afs: AngularFirestore,private authService:AuthService) {}

  ngOnInit() {
    this.publicacionesCol = this.afs.collection<Publicacion>('/publicaciones');
    this.publicaciones = this.publicacionesCol.valueChanges();
    this.userDetails=this.authService.getAuthState();
    console.log(this.authService.isLoggedIn());
    console.log(this.publicaciones.subscribe((resp)=>console.log(resp)));
    console.log('PRUEBA PARA HOME');
  
  }
  addPublicacion() {
    this.publicacionesCol.add({'uid': this.userDetails.uid,
                               'descripcion': this.descripcion,
                               'name':this.userDetails.displayName,
                               'photoURL':this.userDetails.photoURL,
                               'id':this.afs.createId()
                              });
    this.descripcion='';
    
  }
  responder_comment(publicacion){
    console.log(publicacion);
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }


}
