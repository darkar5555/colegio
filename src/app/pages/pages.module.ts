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
import { AlertService, AlertModule } from "ngx-alerts";
import { ProfesoresComponent } from "./profesores/profesores.component";
import { ProfesorComponent } from "./profesores/profesor.component";
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno.component';
import { ClasesComponent } from './clases/clases.component';
import { ClaseComponent } from './clases/clase.component';
import { NotasComponent } from './notas/notas.component';
import { NotaComponent } from './notas/nota.component';



@NgModule({

    declarations: [
        DashboardComponent,
        PagesComponent,
        RegistrarComponent,
        ProfesoresComponent,
        ProfesorComponent,
        AlumnosComponent,
        AlumnoComponent,
        ClasesComponent,
        ClaseComponent,
        NotasComponent,
        NotaComponent
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        CommonModule,
        PAGES_ROUTES,
        MaterialModule,
        AlertModule.forRoot({maxMessages:5, timeout:3000}),
    ],
    exports: [
        DashboardComponent,
        PagesComponent,
        RegistrarComponent,
        ProfesorComponent,
        ProfesoresComponent
    ]
})


export class PagesModule{}