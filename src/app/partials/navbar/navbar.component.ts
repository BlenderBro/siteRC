import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from '@firebase/util';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    private userDisplayName: string;
    private userEmail: string;
    public userPhotoURL: string;

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
