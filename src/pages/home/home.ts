import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../environments/environment';


// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';



export class MyModule { }

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  

  user: Observable<firebase.User>;

 
  constructor(public navCtrl: NavController ,public afAuth: AngularFireAuth  ) {
      this.user = afAuth.authState;
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
