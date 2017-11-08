import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AngularFireDatabase,AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

interface Publicacion {
  descripcion: string;
  uid:string;
  name:string;
  photoURL:string;
}
@Injectable()
export class ServicesService {
  
  publicacionesCol: AngularFirestoreCollection<Publicacion>;
  publicaciones: Observable<Publicacion[]>;
  constructor(private afs: AngularFirestore,db:AngularFireDatabase) { 
    /*this.publicacionesCol = this.afs.collection('publicaciones');
    this.publicaciones = this.publicacionesCol.valueChanges();

    console.log('hola');
    this.publicaciones.subscribe((response)=>console.log(response));*/
    
  }
   getPublicaciones(id:String){
    this.publicacionesCol = this.afs.collection('publicaciones',ref => ref.where('id', '==', id));
    this.publicaciones = this.publicacionesCol.valueChanges();
    return this.publicaciones;
   }
}
