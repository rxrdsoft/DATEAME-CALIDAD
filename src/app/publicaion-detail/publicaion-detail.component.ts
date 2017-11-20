import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../services.service';
import {AuthService} from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection ,AngularFirestoreDocument} from 'angularfire2/firestore';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import * as firebase from 'firebase/app';
import {DatePipe} from '@angular/common';

interface Respuesta {
  
  uid:string;
  name:string;
  photoURL:string;
  mensaje: string;
  idPublicacion:string;
  id:string;
  like:number,
  dislike:number,
  estadoLike:boolean,
  estadoDislike:boolean
}
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
  respuestaUpdate: AngularFirestoreDocument<Respuesta>;
  respuestasCol: AngularFirestoreCollection<Respuesta>;
  respuestas:Observable<Respuesta[]>;
  publicacion:Observable<Publicacion[]>;
  activeUser:firebase.User;
  idPublicacion:string;
  mensaje:string;
  today:number;
  constructor(private afs:AngularFirestore,private service:ServicesService,private route:ActivatedRoute,private auth:AuthService) { }

  ngOnInit() {
    this.route.params.subscribe((params)=>this.idPublicacion=params['id']);
    this.publicacion=this.service.getPublicaciones(this.idPublicacion);
    this.activeUser=this.auth.getAuthState();
    this.respuestasCol = this.afs.collection<Respuesta>('publicacion_respuestas',ref => ref.where('idPublicacion', '==', this.idPublicacion));
   // this.respuestas = this.respuestasCol.valueChanges();
    this.respuestas = this.respuestasCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Respuesta;
        const idRespuesta = a.payload.doc.id;
        return { idRespuesta,...data };
      })
    });
    this.today=Date.now();
    console.log(this.respuestas);
  }


  addRespuesta(){
    
    this.respuestasCol.add({'uid':this.activeUser.uid,
                            'name':this.activeUser.displayName,
                            'photoURL':this.activeUser.photoURL,
                            'mensaje': this.mensaje,
                            'idPublicacion':this.idPublicacion,
                            'id':this.afs.createId(),
                            'like':0,
                            'dislike':0  ,
                            'estadoLike':false,
                            'estadoDislike':false                      
                            });
    this.mensaje="";
  }



  valorar(id:string, like:number,dislike:number,tipo:string){
    //console.log(id+'/'+val+'/'+tipo);
    //3tgoKP1xfeaILS0clppq

    this.respuestaUpdate = this.afs.doc('publicacion_respuestas/'+id);
    if(tipo=='like')
    {
      this.respuestaUpdate.update({
        'like':like=like+1,
        'estadoLike':true
      })
    }
    if(tipo=='dislike'){
      this.respuestaUpdate.update({
        'dislike':dislike=dislike+1,
        'estadoDislike':true
      })
    }

    /*if(like==0 && dislike==0){
      if(tipo=='like'){
        this.respuestaUpdate.update({
          'like':like=like+1,
          'estadoLike':true
        })
      }
      if(tipo=='dislike'){
        this.respuestaUpdate.update({
          'dislike':dislike=dislike+1,
          'estadoDislike':true
        })
      }
    }else{
      if(tipo=='like'){
        like=like+1;
        if(dislike<=0){
          dislike=0;
        }else{
          dislike=dislike-1;
        }
        this.respuestaUpdate.update({
          'like':like,
          'dislike':dislike,
          'estadoLike':true,
          'estadoDislike':false
        })
      }
      if(tipo=='dislike'){
        dislike=dislike+1;
        if(like<=0){
          like=0;
        }else{
          like=like-1;
        }
        this.respuestaUpdate.update({
          'like':like,
          'dislike':dislike,
          'estadoLike':false,
          'estadoDislike':true
        })
      }
    }*/
  }

}
