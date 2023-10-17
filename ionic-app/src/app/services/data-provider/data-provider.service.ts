import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
    } )
export class DataProviderService {

    private _apiUrl: string = 'https://rickandmortyapi.com/api/character';
    jsonCache:BehaviorSubject<any> = new BehaviorSubject( '' ); 

    constructor() { }

    get Data() : Observable<any> {
        return this.jsonCache.asObservable();
    }

    async fetchAPI(){
        try {
            let data = this.jsonCache.value;
            if ( data !== null && data !== undefined && data.length > 0 ) return;

            this.fetchJsonFromUrl( this._apiUrl )
                .then( data => {
                    this.jsonCache.next( data.results );
                } )
                .catch();
        } catch ( error ) {
            console.error( "There was a problem fetching the data:", error );
        }
    }

    private async fetchJsonFromUrl( url: string ): Promise<any> {
        try {
            const response = await fetch( url );
    
            // Check if the response is okay (status code in the range 200-299)
            if ( !response.ok ) {
                throw new Error( 'Network response was not ok' );
            }
    
            // Parse and return the JSON data
            const data = await response.json();
            return data;
        } catch ( error ) {
            console.error( "There was a problem fetching the data:", error );
            throw error;
        }
    }
}
