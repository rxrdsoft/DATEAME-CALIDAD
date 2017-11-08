import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {AuthService} from '../auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService,private router:Router) { }
  
  ngOnInit() {
  }


  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => { 
        this.router.navigate(['publicaciones'])
      })
    .catch((err) => console.log(err));
  }

  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['publicaciones'])
      })
    .catch((err) => console.log(err));
  }

}
