import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";


//importando angular
import { MaterialModule } from '../material/material.module';


//componentes
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

import { PAGES_ROUTES } from "./pages.routes";
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({

    declarations: [
        DashboardComponent,
        PagesComponent,
        RegistrarComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        PAGES_ROUTES,
        MaterialModule
    ],
    exports: [
        DashboardComponent,
        PagesComponent
    ]
})


export class PagesModule{}