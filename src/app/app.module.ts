import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Rutas de la aplicacion
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

 //ngx-bootstrap
 import { CarouselModule } from 'ngx-bootstrap/carousel';



//importaciones de angular material
import 'hammerjs';
import { MaterialModule } from './material/material.module';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
// import { WebComponent } from './web/web.component';


import { WebModule } from './web/web.module';
// import { HomeComponent } from './web/home/home.component';
// import { NosotrosComponent } from './web/nosotros/nosotros.component';
// import { NivelesComponent } from './web/niveles/niveles.component';

@NgModule({
  declarations: [
    AppComponent,

    PagesComponent,
    DashboardComponent,
    LoginComponent,
    NopagefoundComponent,
    // WebComponent,
    // HomeComponent,
    // NosotrosComponent,
    // NivelesComponent
    
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    APP_ROUTES,
    WebModule,
    CarouselModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
