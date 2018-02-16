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
import { RegisterComponent } from './login/register.component';

//Formas
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//alertas
import { AlertModule } from 'ngx-alerts';
import { ServiceModule } from './services/service.module';



@NgModule({
  declarations: [
    AppComponent,

    PagesComponent,
    DashboardComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
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
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AlertModule.forRoot({maxMessages:5, timeout:3000}),
    ServiceModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
