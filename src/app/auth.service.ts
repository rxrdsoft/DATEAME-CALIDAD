import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs/Rx';
@Injectable()
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  
constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
      this.user = _firebaseAuth.authState;
      this.user.subscribe(
        (user) => {
          if (user) {
            this.userDetails = user;
            console.log(this.userDetails);
            //console.log(this.userDetails.displayName);
          }
          else {
            this.userDetails = null;
          }
        }
      );
  }
    getAuthState(){
      return this.userDetails;
    }


    signInWithGoogle() {
      return this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
    }
    signInWithFacebook() {
      return this._firebaseAuth.auth.signInWithPopup(
        new firebase.auth.FacebookAuthProvider()
      )
    }


    isLoggedIn() {
      if (this.userDetails == null ) {
          return false;
        } else {
          return true;
        }
      }
      
    logout() {
       // this.userDetails=null;
        this._firebaseAuth.auth.signOut()
        .then((res) => this.router.navigate(['/publicaciones']));
      }

    
}
