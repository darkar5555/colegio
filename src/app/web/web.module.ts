import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}  from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CommonModule} from '@angular/common';


//angular Materrial
import { MaterialModule } from '../material/material.module';

//Rutas de la aplicacion


//componentes
import { WebComponent } from './web.component';
import { HomeComponent } from './home/home.component';
import { NivelesComponent } from './niveles/niveles.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


//carousel ui
import { UICarouselModule } from "ui-carousel";
import { WEB_ROUTES } from './web.routes';
import { ShareModule } from '../shared/shared.module';


import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    WebComponent,
    HomeComponent,
    NosotrosComponent,
    WebComponent,
    NivelesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule,
    UICarouselModule,
    WEB_ROUTES,
    ShareModule,
    CarouselModule.forRoot()
  ],
  providers: [],
  exports:[
    WebComponent,
    HomeComponent,
    NosotrosComponent,
    WebComponent,
    NivelesComponent
  ]
})

export class WebModule { }