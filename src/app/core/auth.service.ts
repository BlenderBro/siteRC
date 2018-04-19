import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    public user: Observable<firebase.User>;
    userDetails: firebase.User = null;

    constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
        this.user = firebaseAuth.authState;
    }

    
    signInWithGoogle() {
        return this.firebaseAuth.auth.signInWithPopup(
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
        this.firebaseAuth.auth.signOut()
            .then((res) => this.router.navigate(['/']));
    }
}