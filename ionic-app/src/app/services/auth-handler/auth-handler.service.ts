import { Injectable } from '@angular/core';

@Injectable( {
    providedIn: 'root'
    } )
export class AuthHandlerService {

    private _nickname:string;

    constructor() {
        this._nickname = '';
    }

    setNickname( nickname:string ): boolean{
        if ( nickname === null || nickname === undefined || nickname.length <= 0 ) return false;

        this._nickname = nickname;
        return true;
    }

    getNickname(): string {
        return this._nickname;
    }
}
