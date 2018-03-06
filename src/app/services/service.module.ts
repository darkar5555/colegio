import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


//Los sevicios importados
import {
    UsuarioService,
    LoginGuardGuard,
    ProfesoresService,
    AlumnoService,
    ClasesService
} from './service.index';






@NgModule({
    imports: [
        CommonModule,
        HttpClientModule
    ],
    providers:[
        UsuarioService,
        LoginGuardGuard,
        ProfesoresService,
        AlumnoService,
        ClasesService
    ],
    declarations:[]
})

export class ServiceModule{}