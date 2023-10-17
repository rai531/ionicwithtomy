import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthHandlerService } from '../services/auth-handler/auth-handler.service';
import { NavController } from '@ionic/angular';

@Injectable( {
    providedIn: 'root'
    } )
export class AuthGuard implements CanActivate {

    constructor( private authHandler: AuthHandlerService, private navCtrl: NavController ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let nickname: string = this.authHandler.getNickname();
        if ( this.authHandler.isNicknameValid( nickname ) ) return true;
        
        this.navCtrl.navigateRoot( 'login' );
        return false;
    }
  
}
