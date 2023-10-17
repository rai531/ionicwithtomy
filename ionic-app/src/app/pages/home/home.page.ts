import { Component, NgModule } from '@angular/core';
import { DataProviderService } from 'src/app/services/data-provider/data-provider.service';

@Component( {
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    } )
export class HomePage {

    data: Array<any> = new Array<any>();

    constructor( private dataProvider: DataProviderService ) {}

    ngOnInit(){
        this.dataProvider.fetchAPI();

        this.dataProvider.Data.subscribe( ( data ) => {
            this.data = data;
        } );
    }
}
