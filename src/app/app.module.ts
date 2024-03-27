import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NetflixIndexComponent } from './netflix/netflix-index/netflix-index.component';
import { NetflixHeaderComponent } from './netflix/netflix-header/netflix-header.component';
import { NetflixMainComponent } from './netflix/netflix-main/netflix-main.component';
import { NetflixRegisterComponent } from './netflix/netflix-register/netflix-register.component';
import { DataBindingComponent } from './data-binding/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        NetflixIndexComponent,
        NetflixHeaderComponent,
        NetflixMainComponent,
        NetflixRegisterComponent,
        DataBindingComponent
    ],
    bootstrap: [DataBindingComponent],
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/