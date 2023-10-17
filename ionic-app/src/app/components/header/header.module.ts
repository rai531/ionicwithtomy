import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';

@NgModule( {
    declarations: [HeaderComponent],
    imports: [
    CommonModule,
    FormsModule,
    IonicModule
    ],
    exports:[HeaderComponent]
    } )
export class HeaderModule { }
