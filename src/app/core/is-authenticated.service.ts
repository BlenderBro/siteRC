import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';


@Injectable()
export class IsAuthenticatedService {

    constructor(private angularFireAuth: AngularFireAuth, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> {

        return this.angularFireAuth.authState
            .take(1)
            .map(user => {   
                return !!user
            })
            .do(loggedIn => {
                if (!loggedIn) {
                    console.log("access denied")
                    this.router.navigate(['/lemein']);
                }
            })
    }

}
