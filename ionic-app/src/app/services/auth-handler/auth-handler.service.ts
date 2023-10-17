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
        if ( !this.isNicknameValid( nickname ) ) return false;

        this._nickname = nickname;
        return true;
    }

    getNickname(): string {
        return this._nickname;
    }

    isNicknameValid( nickname:string ) : boolean {
        return nickname !== null && nickname !== undefined && nickname.length > 0;
    }
}
