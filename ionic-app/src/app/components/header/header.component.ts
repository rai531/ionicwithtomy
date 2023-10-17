import { Component, Input, OnInit } from '@angular/core';
import { AuthHandlerService } from 'src/app/services/auth-handler/auth-handler.service';

@Component( {
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    } )
export class HeaderComponent  implements OnInit {

    @Input() title: string = '';
    nickname: string = '';

    constructor( private authHandler: AuthHandlerService ) { }

    ngOnInit() {
        this.nickname = this.authHandler.getNickname();
    }

}
