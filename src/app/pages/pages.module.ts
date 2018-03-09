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
import { AlertModule } from "ngx-alerts";
import { ProfesoresComponent } from "./profesores/profesores.component";
import { ProfesorComponent } from "./profesores/profesor.component";
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumnos/alumno.component';
import { ClasesComponent } from './clases/clases.component';
import { ClaseComponent } from './clases/clase.component';
import { NotasComponent } from './notas/notas.component';
import { NotaComponent } from './notas/nota.component';
import { PrimeroComponent } from './clases/primero/primero.component';
import { SegundoComponent } from './clases/segundo/segundo.component';
import { TerceroComponent } from './clases/tercero/tercero.component';
import { CuartoComponent } from './clases/cuarto/cuarto.component';
import { QuintoComponent } from './clases/quinto/quinto.component';
import { SextoComponent } from './clases/sexto/sexto.component';
import { MateriasComponent } from './materias/materias.component';




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
        NotaComponent,
        PrimeroComponent,
        SegundoComponent,
        TerceroComponent,
        CuartoComponent,
        QuintoComponent,
        SextoComponent,
        MateriasComponent
        
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