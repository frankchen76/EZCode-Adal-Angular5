import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras } from '@angular/router';
import { EZCodeAdalService } from './ezcode-adal.service';

@Injectable()
export class EZCodeAdalComponentGuard implements CanActivate {
    constructor(private router: Router, private adalService: EZCodeAdalService) {

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let ret = false;
        // let navigationExtras: NavigationExtras = {
        //     queryParams: { 'redirectUrl': route.url }
        // };

        if (!this.adalService.userInfo) {
            //this.router.navigate(['login'], navigationExtras);
            this.adalService.login();
        } else
            ret = true;
        return ret;
    }
}
