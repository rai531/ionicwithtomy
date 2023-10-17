import { Component, OnInit } from '@angular/core';
import { AuthHandlerService } from '../../services/auth-handler/auth-handler.service';
import { NavController } from '@ionic/angular';

@Component( {
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    } )
export class LoginPage implements OnInit {

    nickname:string = '';

    constructor( private authHandler: AuthHandlerService, private navCtrl: NavController ) { }

    ngOnInit() {
    }

    auth() {
        if ( !this.authHandler.setNickname( this.nickname ) ) return;

        this.navCtrl.navigateRoot( 'home' );
    }

}
