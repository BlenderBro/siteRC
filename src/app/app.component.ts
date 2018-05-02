import { Component, ViewChild } from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { AuthService } from './core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;
    private userDisplayName: string;
    private userEmail: string;
    public userPhotoURL: string;

    reason = '';

    close(reason: string) {
      this.reason = reason;
      this.sidenav.close();
    }
    constructor(public authService: AuthService) {
    }

    ngOnInit() {
        this.userDisplayName = this.authService.userData.subscribe(
            (data) => {
                if (data === null) {
                    this.userDisplayName = '';
                    this.userEmail = '';
                    this.userPhotoURL = '';
                } else {
                    this.userDisplayName = data.displayName;
                    this.userEmail = data.email;
                    this.userPhotoURL = data.photoURL;
                }
            }
        );
    }

    logout() {
        this.authService.logout();
    }
  

}
