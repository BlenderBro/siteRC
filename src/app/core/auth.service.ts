import { Injectable } from '@angular/core';
import { AngularFireAuth  } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    public user: Observable<firebase.User>;
    userDetails: firebase.User = null;
    public userData;

    constructor(public angularFireAuth: AngularFireAuth, private router: Router) {
        this.user = angularFireAuth.authState;
        this.userData = angularFireAuth.authState;
    }


    signInWithGoogle() {
        return this.angularFireAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        )
    }

    isLoggedIn() {
        if (this.userDetails == null) {
            return false;
        } else {
            return true;
        }
    }
    logout() {
        this.angularFireAuth.auth.signOut()
            .then((res) => this.router.navigate(['/']));
    }
}