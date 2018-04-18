import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

@Injectable()

export class LoginComponent implements OnInit {

    constructor(public authService: AuthService, private router: Router) { }

    signInWithGoogle() {
        this.authService.signInWithGoogle()
            .then((response) => {
                // console.log(response.additionalUserInfo.profile.name);
                this.router.navigate(['']);
            })
            .catch((err) => console.log(err));
    }

    ngOnInit() {
    }

}
